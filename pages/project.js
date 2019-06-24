import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../content/output/summary.json'
// import {Router} from '../routes'

import Link from 'next/link'
import Footer from './footer'

class Project extends React.Component {

  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  render() {
    const project = require(`../content/output/projects/${this.props.id}.json`)

    return (
      <div>
        <title>{ project.title }</title>
        <div className="ui stackable grid" style={{ marginTop: '20px' }}>
          <div className="one wide column"></div>

          <div id="project" className="ten wide column centered">

            <div id="breadcrumb" className="ui breadcrumb">
              <a className="section" href="/">Ryo Suzuki</a>
              <i className="right angle icon divider"></i>
              <a className="active section">{ project.name }</a>
            </div>

            <h1 className="title">{ project.title }</h1>
            <p className="meta">
            {
              project.authors
              .map((author) => (author === 'Ryo Suzuki') ? <strong>{author}</strong> : <span>{author}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])
            } &nbsp; <span style={{ color: 'gray' }}>{ project.note }</span>
            </p>
            <p className="meta">
              <a href={ project.conference.url }>
                <b>{ project.conference.fullname }</b>
              </a>
            </p>
            <p className="meta">
              Links: &nbsp;
              <a className="ui label" href={ '/publications/' + project.pdf } target="_blank" style={{ marginRight: '5px', display: project.pdf ? 'inline' : 'none' }}>PDF</a>
              <a className="ui label" href={ project.video } target="_blank" style={{ marginRight: '5px', display: project.video ? 'inline' : 'none' }}>Video</a>
              <a className="ui label" href={ project['short-video'] } target="_blank" style={{ marginRight: '5px', display: project['short-video'] ? 'inline' : 'none' }}>Short Video</a>
              <a className="ui label" href={ '/publications/' + project.slide } target="_blank" style={{ marginRight: '5px', display: project.slide ? 'inline' : 'none' }}>Slide</a>
              <a className="ui label" href={ project.github } target="_blank" style={{ marginRight: '5px', display: project.github ? 'inline' : 'none' }}>GitHub</a>
              <a className="ui label" href={ project['acm-dl'] } target="_blank" style={{ marginRight: '5px', display: project['acm-dl'] ? 'inline' : 'none' }}>ACM DL</a>
              <a className="ui label" href={ project['ieee'] } target="_blank" style={{ marginRight: '5px', display: project['ieee'] ? 'inline' : 'none' }}>IEEE</a>
              <a className="ui label" href={ project['talk'] } target="_blank" style={{ marginRight: '5px', display: project['talk'] ? 'inline' : 'none' }}>Talk</a>
            </p>
            <br/>

            <ReactMarkdown
              source={project.bodyContent}
              escapeHtml={false}
              linkTarget="_blank"
            />

            <h1 style={{ display: project.embed ? 'block' : 'none' }}>Video Preview</h1>
            <div class="video-container" style={{ display: project.embed ? 'block' : 'none' }} >
              <iframe class="embed" width="100%" height="315" src={`${project.embed}?autoplay=1&mute=1&rel=0&loop=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <h1>Publication</h1>
            <div class="ui placeholder segment">
              <p>
                { project.authors.join(', ').replace(/, ([^,]*)$/, ', and $1') }. { project.year }. <b>{ project.title }</b>. <i>{ project.booktitle }</i>. { project.publisher }, { project.pages }.<br/>DOI: <a href={ project.doi } target="_blank">{ project.doi }</a>
              </p>
            </div>

            { project.related &&
            <div class="ui placeholder segment">
              <p>
                { project.related.authors.join(', ').replace(/, ([^,]*)$/, ', and $1') }. { project.related.year }. <b>{ project.related.title }</b>. <i>{ project.related.booktitle }</i>. { project.related.publisher }, { project.related.pages }.<br/>DOI: <a href={ project.related.doi } target="_blank">{ project.related.doi }</a>
              </p>
            </div>
            }

            <div>
              <a class="paper-thumbnail" href={ `/publications/${project.pdf}`} target="_blank">
                <div class="figures ui six column grid">
                  { [...Array(project.pageCount)].map((v, i) => {
                    return (
                      <img class="paper column" src={`/static/projects/${project.id}/paper-${i+1}.png`} />
                    )
                  })}
                </div>
              </a>
            </div>

            { project.related &&
            <div>
              <a class="paper-thumbnail" href={ `/publications/${project.related.pdf}`} target="_blank">
                <div class="figures ui six column grid">
                  { [...Array(project.related.pageCount)].map((v, i) => {
                    return (
                      <img class="paper column" src={`/static/projects/${project.id}/paper-${project.related.suffix}-${i+1}.png`} />
                    )
                  })}
                </div>
              </a>
            </div>
            }

            <h1>Slide</h1>
            <div class="figures ui six column grid">
              { [...Array(project.slideCount)].map((v, i) => {
                const src = `/static/projects/${project.id}/slide-${i+1}.png`
                return (
                  <a class="slide column" href={src} data-lightbox="lightbox">
                    <img src={src} />
                  </a>
                )
              })}
            </div>
            { project.slideCount > 0 &&
              <a href={ project.slide } target="_blank">Slide PDF</a>
            }
            { project.slideCount === 0 &&
              <p>coming soon</p>
            }

          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Project
