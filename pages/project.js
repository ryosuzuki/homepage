import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../output/summary.json'
import {Router} from '../routes'

import Link from 'next/link'


class Project extends React.Component {

  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  render() {
    const project = require(`../output/projects/${this.props.id}.json`)
    
    return (
      <div id="project">
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
  }
}

export default Project
