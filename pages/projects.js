import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

const ids = [
  'insitutale',
  'from-following',
  'augmented-physics',
  'inflatablebots',
  'cinemaworld',
  'map2video',
  'carvid',
  'editing-reality',
  'tingletouch',
  'humanoidturk',
  'challenges-collaboration',
  'designmemo',
  'programmable-reality',
  'mapstory',
  'guided-reality',
  'realitysummary',
  'pantographhaptics',
  'video2mr',
  'shape-it',
  'realityeffects',
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
  'designmemo', 'from-following', 'insitutale', 'pantographhaptics',
  'realityeffects', 'mapstory', 'guided-reality', 'realitysummary', 'video2mr',
  'augmented-physics', 'shape-it', 'inflatablebots', 'collagevis',
  'thermopixels', 'robovisar',
  'augmented-math', 'chameleon-control', 'dynablock', 'electro-voxel',
  'flux-marker', 'hapticbots', 'holobots', 'lift-tiles', 'mixels',
  'morphio', 'pep', 'physica', 'pufferbot', 'reactile', 'realitycanvas',
  'realitysketch', 'realitytalk', 'roomshift', 'selective-self-assembly',
  'shapebots', 'sketched-reality', 'tabby', 'teachable-reality', 'trace-diff'
])

class LazyProjectVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shouldLoad: false }
    this.container = null
    this.video = null
    this.isNearViewport = false
    this.setContainerRef = element => { this.container = element }
    this.setVideoRef = element => { this.video = element }
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  componentDidMount() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange)

    if (!('IntersectionObserver' in window)) {
      this.isNearViewport = true
      this.setState({ shouldLoad: true }, () => {
        this.video.load()
        this.play()
      })
      return
    }

    this.observer = new IntersectionObserver(this.handleIntersection, {
      rootMargin: '300px 0px',
      threshold: 0
    })
    this.observer.observe(this.container)
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    if (this.observer) this.observer.disconnect()
  }

  handleIntersection(entries) {
    this.isNearViewport = entries.some(entry => entry.isIntersecting)

    if (!this.isNearViewport) {
      if (this.video) this.video.pause()
      return
    }

    if (!this.state.shouldLoad) {
      this.setState({ shouldLoad: true }, () => {
        this.video.load()
        this.play()
      })
      return
    }

    this.play()
  }

  handleVisibilityChange() {
    if (document.hidden || !this.isNearViewport) {
      if (this.video) this.video.pause()
    } else {
      this.play()
    }
  }

  play() {
    if (!this.video) return
    const playPromise = this.video.play()
    if (playPromise && playPromise.catch) playPromise.catch(() => {})
  }

  render() {
    const { id } = this.props
    return (
      <div ref={this.setContainerRef} data-project-video={id}>
        {this.state.shouldLoad ?
          <video
            ref={this.setVideoRef}
            poster={`/static/posters/${id}.jpg`}
            preload="none"
            loop
            muted
            playsInline
            width="100%"
            data-project-video-player={id}
          >
          <source src={`/static/video/${id}.mp4`} type="video/mp4" />
          </video>
          :
          <img
            src={`/static/posters/${id}.jpg`}
            alt={`${id} project video preview`}
            loading="lazy"
            width="100%"
          />
        }
      </div>
    )
  }
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
            <div className="project ui vertical segment stackable grid" data-id={ project.id } key={project.id}>
              <div className="six wide column">
                { project.image &&
                <a href={ link } target="_blank" className="cover-image-container">
                  <img className="ui rounded images cover-image" src={ `/static/images/${ project.image }` } loading="lazy" />
                </a>
                }
                { !project.image && projectsWithLocalVideo.has(project.id) &&
                <LazyProjectVideo id={project.id} />
                }
                { !project.image && !projectsWithLocalVideo.has(project.id) &&
                <a href={ link } target="_blank" className="cover-image-container">
                  <img className="ui rounded images cover-image" src={`/static/posters/${project.id}.jpg`} loading="lazy" />
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
