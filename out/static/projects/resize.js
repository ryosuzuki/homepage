const sharp = require('sharp');
const fs = require('fs')
const dir = process.argv[2]
const path = dir + '/*'
const type = !process.argv[3] ? 'paper' : process.argv[3]
const files = fs.readdirSync(dir)
console.log(files)
console.log(type)

let i = 0
for (let file of files) {
  let id = i < 10 ? '0' + i.toString(): i.toString()
  let out = `${dir}/../${type}/${type}-${id}.jpg`
  sharp(`${dir}/${file}`)
  .resize(200)
  .toFile(out, (err, info) => { console.log(err) })
  i++
}