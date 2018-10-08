const routes = require('next-routes')

module.exports = routes()
.add('/static/publications/:id', '/publications/:id')
.add('/:id', 'project')
