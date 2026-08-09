const fs = require('fs')
const http = require('http')
const path = require('path')

const root = path.resolve(__dirname, '..')
const base = process.env.BASE_URL || 'http://127.0.0.1:3010'

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function projectIds() {
  const source = read('pages/projects.js')
  const block = source.match(/const ids = \[([\s\S]*?)\]/)[1]
  return [...block.matchAll(/'([^']+)'/g)].map(match => match[1])
}

function request(route) {
  return new Promise((resolve, reject) => {
    http.get(`${base}${route}`, response => {
      const chunks = []
      response.on('data', chunk => chunks.push(chunk))
      response.on('end', () => resolve({ status: response.statusCode, body: Buffer.concat(chunks).toString('utf8') }))
    }).on('error', reject)
  })
}

async function main() {
  const ids = projectIds()
  const checks = []
  for (const id of ids) {
    const file = `content/output/projects/${id}.json`
    if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing generated project data: ${id}`)
    const project = JSON.parse(read(file))
    for (const field of ['id', 'name', 'title', 'authors', 'conference']) {
      if (!project[field]) throw new Error(`${id}: missing ${field}`)
    }
    if (!fs.existsSync(path.join(root, `static/posters/${id}.jpg`)) && !project.image) {
      throw new Error(`${id}: missing poster`)
    }
    if (project.pdf && !fs.existsSync(path.join(root, `static/publications/${project.pdf}`))) {
      throw new Error(`${id}: missing PDF ${project.pdf}`)
    }
    if (!project.external) checks.push([`/${id}`, project.name])
    if (project.pdf) checks.push([`/static/publications/${project.pdf}`, null])
  }

  checks.unshift(
    ['/', 'Ryo Suzuki'],
    ['/students', 'Ada Yi Zhao'],
    ['/students', 'Xiaoan (Sean) Liu'],
    ['/students', 'Hye-Young Jo'],
    ['/students', 'Keiichi Ihara'],
    ['/students', 'Ziru Wei'],
    ['/students', 'ChungHa Lee'],
    ['/students', 'Zhuo Wang'],
    ['/students', 'Aditya Gunturu'],
    ['/students', 'Nandi Zhang']
  )
  for (const asset of [
    '/static/cv/cv.pdf',
    '/static/students/ada-zhao.jpg',
    '/static/students/chungha-lee.jpg',
    '/static/students/daeho-lee.jpg',
    '/static/students/freya-wen.jpg',
    '/static/students/zhuo-wang.jpg',
    '/static/video/mapstory.mp4',
    '/static/video/guided-reality.mp4',
    '/static/video/realitysummary.mp4',
    '/static/video/video2mr.mp4',
    '/static/video/augmented-physics.mp4',
    '/static/video/shape-it.mp4',
    '/static/video/inflatablebots.mp4',
    '/static/video/collagevis.mp4',
    '/static/video/thermopixels.mp4',
    '/static/video/robovisar.mp4'
  ]) checks.push([asset, null])

  for (const [route, expected] of checks) {
    const result = await request(route)
    if (result.status !== 200) throw new Error(`${route}: HTTP ${result.status}`)
    if (expected && !result.body.includes(expected)) throw new Error(`${route}: missing expected text ${expected}`)
    if (route === '/' && result.body.includes('AI Agent Privacy Policy')) {
      throw new Error('/: obsolete AI Agent Privacy Policy link is still rendered')
    }
    if (route === '/' && result.body.includes('I am looking for prospective')) {
      throw new Error('/: paused recruiting notice is still rendered')
    }
  }
  console.log(`Verified ${ids.length} project records and ${checks.length} live routes/assets at ${base}`)
}

main().catch(error => {
  console.error(error.message)
  process.exit(1)
})
