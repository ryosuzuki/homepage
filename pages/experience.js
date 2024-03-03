import React from 'react'
import ReactMarkdown from 'react-markdown'

import items from '../content/output/experience.json'

class Experience extends React.Component {
  render() {
    return (
      <div id="updates" className="ui relaxed divided list">
        { items.map((item, i) => {
          const advisors = item.advisors || []
          return (
            <div className="item" style={{ padding: '20px 0' }}>
              { i == 0 &&
                <h3>Current Affiliation</h3>
              }
              { i == 3 &&
                <h3>Previous Affiliation</h3>
              }
              <div className="ui mini image">
                <img src={ `/static/images/${item.logo}` } />
              </div>
              <div className="middle aligned content">
                <div className="header">
                  { item.institute.name }
                  <br />
                </div>
                <div className="description">
                  <a href={ item.lab.url } target="_blank">
                    <b>{ item.lab.name }</b>
                  </a>
                </div>
              </div>
              <div className="content">
                <p style={{ marginTop: "10px", marginBottom: "-5px" }}>{ item.role }</p>
                <div className="ui list">
                  { advisors.map((advisor) => {
                    return (
                      <div className="item">
                        <a href={ advisor.url } target="_blank">
                         { advisor.name }
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="extra" style={{ marginLeft: '0px', marginTop: '5px' }}>
                <div className="ui label">{ item.period }</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Experience
