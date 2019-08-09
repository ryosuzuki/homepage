
const fs = require('fs')
const convert = require('png-to-jpeg')
const dir = process.argv[2]
const type = !process.argv[3] ? 'paper' : process.argv[3]
const files = fs.readdirSync(dir)
console.log(files)
console.log(type)

let i = 1
for (let file of files) {
  let name = `${type}-${i}.jpg`
  let buffer = fs.readFileSync(`${dir}/${file}`)
  convert({ quality: 1 })(buffer)
  .then(output => fs.writeFileSync(`${dir}/../slide/${name}`, output))
  i++
}
