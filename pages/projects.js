import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

const ids = [
  'cinemaworld',
  'map2video',
  'carvid',
  'editing-reality',
  'tingletouch',
  'humanoidturk',
  'challenges-collaboration',
  'mapstory',
  'guided-reality',
  'realitysummary',
  'video2mr',
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

const projectsWithLocalVideo = new Set([
  'cinemaworld', 'editing-reality', 'humanoidturk', 'map2video', 'tingletouch',
  'mapstory', 'guided-reality', 'realitysummary', 'video2mr',
  'augmented-physics', 'shape-it', 'inflatablebots', 'collagevis',
  'thermopixels', 'robovisar',
  'augmented-math', 'chameleon-control', 'dynablock', 'electro-voxel',
  'flux-marker', 'hapticbots', 'holobots', 'lift-tiles', 'mixels',
  'morphio', 'pep', 'physica', 'pufferbot', 'reactile', 'realitycanvas',
  'realitysketch', 'realitytalk', 'roomshift', 'selective-self-assembly',
  'shapebots', 'sketched-reality', 'tabby', 'teachable-reality', 'trace-diff'
])

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
            <div className="project ui vertical segment stackable grid" data-id={ project.id } key={project.id}>
              <div className="six wide column">
                { project.image &&
                <a href={ link } target="_blank" className="cover-image-container">
                  <img className="ui rounded images cover-image" src={ `/static/images/${ project.image }` } />
                </a>
                }
                { !project.image && projectsWithLocalVideo.has(project.id) &&
                <video poster={`/static/posters/${project.id}.jpg`} autoPlay loop muted playsInline width="100%">
                  <source src={`/static/video/${project.id}.mp4`} type="video/mp4" />
                </video>
                }
                { !project.image && !projectsWithLocalVideo.has(project.id) &&
                <a href={ link } target="_blank" className="cover-image-container">
                  <img className="ui rounded images cover-image" src={`/static/posters/${project.id}.jpg`} />
                </a>
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
                    .map((author) => (author.includes('Ryo Suzuki')) ? <strong key={author}>{author}</strong> : <span key={author}>{author}</span>)
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
