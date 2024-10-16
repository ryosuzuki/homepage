import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

const ids = [
  'augmented-physics',
  'shape-it',
  'inflatablebots',
  'collagevis',
  'thermopixels',
  'robovisar',
  'augmented-math',
  'realitycanvas',
  'holobots',
  'physica',
  'teachable-reality', 
  'chameleon-control', 
  'sketched-reality', 
  'realitytalk', 
  'mixels', 
  'selective-self-assembly', 
  'ar-and-robotics', 
  'expandable-robots', 
  'electro-voxel', 
  'hapticbots', 
  'realitysketch', 
  'pufferbot', 
  'roomshift', 
  'lift-tiles', 
  'shapebots', 
  'morphio', 
  'dynablock', 
  'tabby', 
  'reactile', 
  'pep', 
  'flux-marker', 
  'trace-diff', 
  'mixed-initiative', 
  'refazer', 
  'atelier'
]

let projects = []
for (let id of ids) {
  const project = require(`../content/output/projects/${id}.json`)
  projects.push(project)
}

class Projects extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="projects" >
        <h1>Full Papers</h1>
        { projects.map((project) => {
          let link = `/${ project.id }`
          if (project.external) {
            link = project.external
          }
          return (
            <div className="project ui vertical segment stackable grid" data-id={ project.id } >
              <div className="six wide column">
                { project.image &&
                <a href={ link } target="_blank" className="cover-image-container">
                  <img className="ui rounded images cover-image" src={ `/static/images/${ project.image }` } />
                </a>
                }
                { !project.image &&
                <video poster={`/static/posters/${project.id}.jpg`} autoplay="" loop="loop" muted="true" playsinline="" width="100%" onclick="this.play()" onmouseover="this.play()">
                  {/*
                  <source src={`/static/webm/${project.id}.webm`} type="video/webm"></source>
                  */}
                  <source src={`/static/video/${project.id}.mp4`} type="video/mp4" />
                </video>
                }
              </div>
              <div className="ten wide column">
                <a href={ link } target="_blank">
                  <h1 className="ui header" style={{ marginBottom: '10px' }}>
                      <span>{ project.name }</span>
                    <span className="ui big label">{ project.conference.name }</span>
                    <span className="ui teal large label" style={{ display: ['morphio'].includes(project.id) ? 'inline-block' : 'none' }}>Best Paper Award</span>
                    <span className="ui teal large label" style={{ display: ['realitysketch'].includes(project.id) ? 'inline-block' : 'none' }}>Honorable Mention Award</span>
                  </h1>
                  <h2 style={{ margin: '5px 0' }}>
                    { project.description }
                  </h2>
                </a>
                <p>
                  {
                    project.authors
                    .map((author) => (author.includes('Ryo Suzuki')) ? <strong>{author}</strong> : <span>{author}</span>)
                    .reduce((prev, curr) => [prev, ', ', curr])
                  } &nbsp; <span style={{ color: 'gray' }}>{ project.note }</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Projects
