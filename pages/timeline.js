import React from 'react'
import ReactMarkdown from 'react-markdown'

import items from '../output/news.json'

class Timeline extends React.Component {
  render() {
    return (
      <div id="updates" className="ui relaxed divided list">
        <h3>Recent Updates</h3>
        { items.map((item) => {
          return (
            <div className="item">
              <div className="header">{ item.date }</div>
              <div className="content">
                <ReactMarkdown source={ item.text } />
              </div>

            </div>
          )
        })}
      </div>
    )
  }
}

export default Timeline
/*
<div class="ui relaxed divided list">
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
      <a class="header">Semantic-Org/Semantic-UI</a>
      <div class="description">Updated 10 mins ago</div>
    </div>
  </div>
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
      <a class="header">Semantic-Org/Semantic-UI-Docs</a>
      <div class="description">Updated 22 mins ago</div>
    </div>
  </div>
  <div class="item">
    <i class="large github middle aligned icon"></i>
    <div class="content">
      <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
      <div class="description">Updated 34 mins ago</div>
    </div>
  </div>
</div>
*/