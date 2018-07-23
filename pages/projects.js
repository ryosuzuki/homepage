import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../output/summary.json'

import { Link } from '../routes'

// import $ from 'jquery'
// window.jQuery = $

const ids = ['reactile', 'pep', 'flux-marker', 'trace-diff', 'mixed-initiative', 'refazer', 'atelier']

let projects = []
for (let id of ids) {
  const project = require(`../output/projects/${id}.json`)
  projects.push(project)
}



class Projects extends React.Component {

  componentDidMount() {
    $(document).on('click' , '.project' , function(event) {
      let id = $(this).data('id')
      console.log(id)
      $(`#${id}`)
      .modal({
        transition: 'fade down',
        duration: 300,
      })
      .modal('show');
    })
  }

  render() {
    return (
      <div id="projects" >
        <h1>Publications</h1>
        { projects.map((project) => {
          return (
            <div className="project ui vertical segment grid" data-id={ project.id } >
              <div className="four wide column">
                <img className="ui rounded image" src={ `/static/images/${ project.image }` } />
              </div>
              <div className="twelve wide column">
                <h1 className="ui header" style={{ marginBottom: '10px' }}>
                  <span>{ project.name }</span>
                  <span className="ui large label">{ project.conference.name }</span>
                </h1>
                <h3 style={{ margin: '5px 0' }}>{ project.description }</h3>
                <p>{ project.authors }</p>
                <Link route={ project.id }>
                  <a>Link</a>
                </Link>
              </div>

              <div id={ project.id } className="ui modal">
                <div className="content">
                  <h1>{ project.title }</h1>
                  <div className="ui horizontal divider"></div>
                  <div className="authors">
                    <h3>Authors</h3>
                    <div className="authors ui very relaxed horizontal divided list">
                      <div className="item">
                        { project.authors }
                      </div>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="video">
                    <h3>Video Preview</h3>
                    <div className="video-container">
                      <iframe id="video" width="560" height="300" src="https://www.youtube.com/embed/-JcezIL3UKQ" frameBorder="0" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="abstract">
                    <h3>Abstract</h3>
                    { project.abstract }
                  </div>
                </div>
                <div className="actions">
                  <div className="ui approve button">Approve</div>
                  <div className="ui button">Neutral</div>
                  <div className="ui cancel button">Cancel</div>
                </div>
              </div>


            </div>
          )
        })}
      </div>
    )
  }
}

/*

/*
<div class="ui items">
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png">
    </div>
    <div class="content">
      <a class="header">Header</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        Additional Details
      </div>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png">
    </div>
    <div class="content">
      <a class="header">Header</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        Additional Details
      </div>
    </div>
  </div>
</div>

      <div id="projects" className="ui items" >
        <h1>Projects</h1>
        { projects.map((project) => {
          return (
            <div className="project ui item" data-id={ project.id } >
              <div className="image">
                <img className="ui rounded image" src={ `/static/images/${ project.image }` } />
              </div>
              <div className="content">
                <h1 className="ui header" style={{ marginBottom: '10px' }}>
                  <span>{ project.name }</span>
                  <span className="ui large label">{ project.conference.name }</span>
                </h1>
                <h3 style={{ margin: '5px 0' }}>{ project.description }</h3>
                <p>{ project.authors }</p>
                <Link route={ project.id }>
                  <a>Link</a>
                </Link>
              </div>

              <div id={ project.id } className="ui modal">
                <div className="content">
                  <h1>{ project.title }</h1>
                  <div className="ui horizontal divider"></div>
                  <div className="authors">
                    <h3>Authors</h3>
                    <div className="authors ui very relaxed horizontal divided list">
                      <div className="item">
                        { project.authors }
                      </div>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="video">
                    <h3>Video Preview</h3>
                    <div className="video-container">
                      <iframe id="video" width="560" height="300" src="https://www.youtube.com/embed/-JcezIL3UKQ" frameBorder="0" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className="ui horizontal divider"></div>
                  <div className="abstract">
                    <h3>Abstract</h3>
                    { project.abstract }
                  </div>
                </div>
                <div className="actions">
                  <div className="ui approve button">Approve</div>
                  <div className="ui button">Neutral</div>
                  <div className="ui cancel button">Cancel</div>
                </div>
              </div>


            </div>
          )
        })}
      </div>
    )

*/



export default Projects