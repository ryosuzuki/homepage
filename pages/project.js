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
              .map((author) => (author.includes('Ryo Suzuki')) ? <strong>{author}</strong> : <span>{author}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])
            } &nbsp; <span style={{ color: 'gray' }}>{ project.note }</span>
            </p>
            <p className="meta">
              <a href={ project.conference.url } target="_blank">
                <b>{ project.conference.fullname }</b>
              </a>
            </p>
            <p className="meta">
              Links: &nbsp;
              <a className="ui inverted secondary button" href={ '/publications/' + project.pdf } target="_blank" style={{ marginRight: '5px', display: project.pdf ? 'inline' : 'none' }}>
                <b>
                <i className="far fa-file-pdf" />
                &nbsp;&nbsp;
                PDF
                </b>
              </a>
              <a className="ui inverted secondary button" href={ '/publications/' + project.poster } target="_blank" style={{ marginRight: '5px', display: project.poster ? 'inline' : 'none' }}>
                <b>
                <i className="far fa-file-pdf" />
                &nbsp;&nbsp;
                Poster
                </b>
              </a>
              <a className="ui inverted secondary button" href={ '/publications/' + project.slide } target="_blank" style={{ marginRight: '5px', display: project.slide ? 'inline' : 'none' }}>
                <b>
                <i class="far fa-file-pdf" />
                &nbsp;&nbsp;
                Slide
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project.video } target="_blank" style={{ marginRight: '5px', display: project.video ? 'inline' : 'none' }}>
                <b>
                <i className="fas fa-video" />
                &nbsp;&nbsp;
                Video
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project['short-video'] } target="_blank" style={{ marginRight: '5px', display: project['short-video'] ? 'inline' : 'none' }}>
                <b>
                <i className="fas fa-video" />
                &nbsp;&nbsp;
                30s Video
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project.github } target="_blank" style={{ marginRight: '5px', display: project.github ? 'inline' : 'none' }}>
                <b>
                <i class="fab fa-github" />
                &nbsp;&nbsp;
                GitHub
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project['acm-dl'] } target="_blank" style={{ marginRight: '5px', display: project['acm-dl'] ? 'inline' : 'none' }}>
                <b>
                <i class="fas fa-link"></i>
                &nbsp;&nbsp;
                ACM DL
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project['ieee'] } target="_blank" style={{ marginRight: '5px', display: project['ieee'] ? 'inline' : 'none' }}>
                <b>
                <i class="fas fa-link"></i>
                &nbsp;&nbsp;
                IEEE
                </b>
              </a>
              <a className="ui inverted secondary button" href={ project['talk'] } target="_blank" style={{ marginRight: '5px', display: project['talk'] ? 'inline' : 'none' }}>
                <b>
                <i class="fas fa-chalkboard-teacher" />
                &nbsp;&nbsp;
                Talk
                </b>
              </a>
            </p>
            <br/>

            { /* <h1 style={{ display: project.embed ? 'block' : 'none' }}>Video Preview</h1> */ }
            <div class="video-container" style={{ display: project.embed ? 'block' : 'none' }} >
              <iframe
                class="embed"
                width="100%"
                height="315"
                src={`${project.embed}?`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                mozAllowFullScreen={true}
                msAllowFullScreen={true}
                oAllowFullScreen={true}
                webkitAllowFullScreen={true}
              ></iframe>
            </div>

            <ReactMarkdown
              source={project.bodyContent}
              escapeHtml={false}
              linkTarget="_blank"
            />

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

            { project.pageCount > 0 &&
              <a className="ui inverted secondary button" href={ `/publications/${project.pdf}` } target="_blank">
                <b>
                <i className="far fa-file-pdf" />
                &nbsp;&nbsp;
                Download PDF
                </b>
              </a>
            }
            <div class="figures ui six column grid">
              { [...Array(project.pageCount)].map((v, i) => {
                const id = i+1 < 10 ? `0${i+1}` : `${i+1}`
                const src = `/static/projects/${project.id}/paper-original/paper-${id}.jpg`
                const min = `/static/projects/${project.id}/paper/paper-${id}.jpg`
                return (
                  <a class="paper column" href={src} data-lightbox="lightbox">
                    <img src={min} />
                  </a>
                )
              })}
            </div>

            { project.related &&
              <div>
                <a className="ui inverted secondary button" href={ `/publications/${project.related.pdf}` } target="_blank">
                  <b>
                  <i className="far fa-file-pdf" />
                  &nbsp;&nbsp;
                  Download Paper PDF
                  </b>
                </a>
                <div class="figures ui six column grid">
                  { [...Array(project.related.pageCount)].map((v, i) => {
                    const id = i+1 < 10 ? `0${i+1}` : `${i+1}`
                    const src = `/static/projects/${project.id}/paper-original/paper-${project.related.suffix}-${id}.jpg`
                    const min = `/static/projects/${project.id}/paper/paper-${project.related.suffix}-${id}.jpg`
                    return (
                      <a class="paper column" href={src} data-lightbox="lightbox">
                        <img src={min} />
                      </a>
                    )
                  })}
                </div>
              </div>
            }

            <h1>Slide</h1>
            { project.slideCount > 0 &&
              <a className="ui inverted secondary button" href={ `/publications/${project.slide}` } target="_blank">
                <b>
                <i className="far fa-file-pdf" />
                &nbsp;&nbsp;
                Download Slide PDF
                </b>
              </a>
            }
            { project.slideCount === 0 &&
              <p>coming soon</p>
            }
            <div class="figures ui six column grid">
              { [...Array(project.slideCount)].map((v, i) => {
                const id = i+1 < 10 ? `0${i+1}` : `${i+1}`
                const src = `/static/projects/${project.id}/slide-original/slide-${id}.jpg`
                const min = `/static/projects/${project.id}/slide/slide-${id}.jpg`
                return (
                  <a class="slide column" href={src} data-lightbox="lightbox">
                    <img src={min} />
                  </a>
                )
              })}
            </div>

          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Project
