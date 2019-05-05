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
              <a className="section">Home</a>
              <i className="right angle icon divider"></i>
              <a className="active section">{ project.name }</a>
            </div>

            <div id={ project.id }>
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

                { project }

<div className="images">
  <img src="/static/images/dynablock.jpg" />
  <img src="/static/images/reactile.jpg" />
  <img src="/static/images/dynablock.jpg" />
  <img src="/static/images/dynablock.jpg" />
</div>


                <div className="video">
                  <h3>Video Preview</h3>
                  <div className="video-container">
                    <iframe className="embed" width="100%" height="315" src="https://www.youtube.com/embed/7nPlr3O9xu8?autoplay=1&mute=1&rel=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <div className="one wide column"></div>
        </div>
      </div>
    )
  }
}

export default Project
