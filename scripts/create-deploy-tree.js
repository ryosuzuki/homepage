const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const source = path.join(root, 'out')
const target = path.join(root, 'deploy-out')

if (!fs.existsSync(path.join(source, 'index.html'))) {
  throw new Error('Run next export before creating the deployment tree')
}

fs.rmSync(target, { recursive: true, force: true })
fs.mkdirSync(target, { recursive: true })

function copy(relative) {
  const from = path.join(source, relative)
  const to = path.join(target, relative)
  if (!fs.existsSync(from)) throw new Error(`Missing referenced export asset: ${relative}`)
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(from, to)
}

function walk(directory, visit) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) walk(absolute, visit)
    else visit(absolute)
  }
}

// Copy route HTML and root metadata, but rebuild generated/static assets from
// references so stale Next builds and unreferenced source media never deploy.
walk(source, absolute => {
  const relative = path.relative(source, absolute)
  if (relative.startsWith(`static${path.sep}`) || relative.startsWith(`_next${path.sep}`)) return
  if (relative.startsWith(`publications${path.sep}`) || ['CV.pdf', 'cv.pdf'].includes(relative)) return
  copy(relative)
})

const references = new Set()
const scanned = new Set()
const referencePattern = /(?:^|[=\"'(\s])((?:\/static|\/_next)\/[A-Za-z0-9_@%+.,'()\-\/]+\.[A-Za-z0-9]+)(?:[?#][^\s\"'<>)]*)?/gm

// Project preview URLs are assembled at runtime, so the exported bundle does
// not contain their complete paths. Parse the page's explicit video ID set so
// the reference-driven deployment keeps every lazy-loaded preview.
const projectsSource = fs.readFileSync(path.join(root, 'pages/projects.js'), 'utf8')
const localVideoBlock = projectsSource.match(/const projectsWithLocalVideo = new Set\(\[([\s\S]*?)\]\)/)
if (!localVideoBlock) throw new Error('Could not find projectsWithLocalVideo in pages/projects.js')
for (const match of localVideoBlock[1].matchAll(/'([^']+)'/g)) {
  references.add(`static/video/${match[1]}.mp4`)
  references.add(`static/posters/${match[1]}.jpg`)
}

function collect(absolute) {
  if (scanned.has(absolute)) return
  scanned.add(absolute)
  const text = fs.readFileSync(absolute, 'utf8')
  for (const match of text.matchAll(referencePattern)) {
    references.add(decodeURIComponent(match[1]).slice(1))
  }
}

walk(target, absolute => {
  if (/\.(html|css|js|json)$/.test(absolute)) collect(absolute)
})

let copied
do {
  copied = 0
  for (const relative of [...references]) {
    const destination = path.join(target, relative)
    if (fs.existsSync(destination)) continue
    copy(relative)
    copied += 1
    if (/\.(css|js|json)$/.test(relative)) collect(destination)
  }
} while (copied > 0)

// Preserve the historical uppercase CV entry point without duplicating media.
copy('static/cv/cv.pdf')
fs.copyFileSync(path.join(target, 'static/cv/cv.pdf'), path.join(target, 'CV.pdf'))

let bytes = 0
let files = 0
walk(target, absolute => {
  bytes += fs.statSync(absolute).size
  files += 1
})
console.log(`Created deploy-out with ${files} files and ${(bytes / 1024 / 1024).toFixed(1)} MiB`)
