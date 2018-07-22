const withCSS = require('@zeit/next-css')
module.exports = withCSS()

const SUMMARY_JSON = require('./output/summary.json')

// module.exports = {
//   exportPathMap: function() {
//     const projects = {}
//     const paths = {}
//     SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
//       .forEach((file) => {
//         const fileObj = SUMMARY_JSON.fileMap[file]
//         const obj = {}
//         if (fileObj.paths) {
//           // Handle custom paths / aliases.
//           obj.page = fileObj.page
//           obj.query = { filePath: fileObj.filePath }
//           fileObj.paths.forEach((path) => {
//             paths[path] = obj
//           })
//         } else if (file.indexOf('content/projects') === 0) {
//           // Handle projects.
//           const page = file.split('content').join('').split('.json').join('')
//           projects[page] = {
//             page: '/project',
//             query: {
//               fullUrl: page
//             }
//           }
//         }
//       })

//     return Object.assign({}, {
//       '/': { page: '/' }
//     }, projects, paths) // aliases
//   }
// }

