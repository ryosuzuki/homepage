const sharp = require('sharp');
const fs = require('fs')
const dir = process.argv[2]
const path = dir + '/*'
const type = !process.argv[3] ? 'paper' : process.argv[3]
const files = fs.readdirSync(dir)
console.log(files)
console.log(type)

let i = 1
for (let file of files) {
  let id = i < 10 ? '0' + i.toString(): i.toString()
  if (files.length >= 100) {
    id = i.toString()
    if (i < 10) {
      id = '00' + i.toString()
    } else if (i < 100) {
      id = '0' + i.toString()
    }
  }
  let out = `${dir}/../${type}/${type}-${id}.jpg`
  sharp(`${dir}/${file}`)
  .resize(200)
  .toFile(out, (err, info) => { console.log(err) })
  i++
}
