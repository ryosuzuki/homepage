const next = require('next')
const routes = require('next-routes')()
const app = next({dev: process.env.NODE_ENV !== 'production'})

routes.add('students-page', '/students', 'students')
routes.add('privacy-page', '/privacy', 'privacy')
routes.add('project-page', '/:id', 'project')
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')
app.prepare().then(() => {
  const port = Number(process.env.PORT || 3000)
  createServer(handler).listen(port, () => console.log(`Route-aware server listening on ${port}`))
})
