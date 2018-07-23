import React from 'react'

import ReactMarkdown from 'react-markdown'
import '../style.css'
import updates from '../output/updates.json'
import experience from '../output/experience.json'
import awards from '../output/awards.json'
import activities from '../output/activities.json'
import publications from '../output/publications.json'
import posters from '../output/posters.json'


import Profile from './profile'
import Projects from './projects'
import Experience from './experience'
import Timeline from './timeline'


class Index extends React.Component {
  render() {

    return (
      <div>
        <Profile />

        <div className="ui stackable grid">
          <div className="one wide column"></div>

          <div id="side" className="three wide column centered">
            <Experience />
            <Timeline />

<div style={{ textAlign: 'center' }}>
<a className="twitter-timeline" href="https://twitter.com/ryosuzk" data-widget-id="586803163707023360" width="580" >Tweets by @ryosuzk</a>
</div>
          </div>

          <div id="container" className="eleven wide column centered">
            <section>

              <Projects />

              <div class="ui divider"></div>
              <div id="posters">
                <h1>Other Publications</h1>
                <div className="ui vertical segment">
                  <div className="ui bulleted list">
                  { posters.map((item) => {
                    return (
                      <div className="item" style={{ lineHeight: '1.8rem' }}>
                        <a href=""><b>{ item.title }</b></a>
                        <br />
                        { item.author }, <i>{ item.booktitle } ({item.series })</i>. { item.publisher }, { item.address }, { item.pages }. DOI: <a href={ `http://dx.doi.org/${item.doi}`}>{ item.doi }</a>
                      </div>
                    )
                  }) }
                  </div>
                </div>
              </div>

              <div class="ui divider"></div>
              <div id="activities">
                <h1>Professional Activities</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ activities.bodyContent } />
                </div>
              </div>
              <div class="ui divider"></div>
              <div id="awards">
                <h1>Awards and Honors</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ awards.bodyContent } />
                </div>
              </div>
            </section>
          </div>
          <div className="one wide column"></div>

        </div>
        <div className="ui stackable grid">
          <div className="sixteen wide column centered">
            <p style={{ textAlign: 'center' }}>
              Ryo Suzuki All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
