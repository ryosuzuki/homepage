const next = require('next')
const routes = require('next-routes')()
const app = next({dev: process.env.NODE_ENV !== 'production'})

const https = require('https')
const fs = require('fs')
const url = 'https://raw.githubusercontent.com/ucalgary-ilab/ilab-website/master/content/output/summary.json'
const localFilePath = './content/output/ilab-summary.json'

https.get(url, (res) => {
  let data = ''
  
  res.on('data', (chunk) => {
    data += chunk
  })
  
  res.on('end', () => {
    fs.writeFile(localFilePath, data, (err) => {
      if (err) throw err
      console.log(`Data saved to ${localFilePath}`)
    })
  })  
}).on('error', (err) => {
  console.error(err)
})

routes.add('/:id', 'project')
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})