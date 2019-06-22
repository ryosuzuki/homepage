import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../content/output/summary.json'
// import {Router} from '../routes'

import Link from 'next/link'

class Project extends React.Component {

  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  render() {
    const project = require(`../content/output/projects/${this.props.id}.json`)

    return (
      <div>
        <div className="ui stackable grid" style={{ marginTop: '20px' }}>
          <div className="one wide column"></div>

          <div id="project" className="ten wide column centered">

            <div id="breadcrumb" className="ui breadcrumb">
              <a className="section" href="/">Ryo Suzuki</a>
              <i className="right angle icon divider"></i>
              <a className="active section">{ project.name }</a>
            </div>
            <ReactMarkdown source={project.bodyContent}escapeHtml={false} />
          </div>

          <div className="one wide column"></div>
        </div>
      </div>
    )
  }
}

export default Project
