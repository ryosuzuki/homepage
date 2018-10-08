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
  componentDidMount() {
    $('a').attr('target', 'blank');
  }

  render() {

    return (
      <div>
        <div className="ui stackable grid">
          <div className="one wide column"></div>

          <div id="side" className="three wide column centered">
            <div className="three wide column centered" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>
              <a href="/">
                <img style={{ maxWidth: '80%', margin: 'auto' }} src="/static/images/profile.png" className="ui image" />
              </a>
            </div>


            <Experience />
            <Timeline />

            <div style={{ textAlign: 'center' }}>
            <a className="twitter-timeline" href="https://twitter.com/ryosuzk" data-widget-id="586803163707023360" width="580" >Tweets by @ryosuzk</a>
            </div>
          </div>

          <div className="eleven wide column centered">
            <Profile />

            <section id="container">
              <Projects />

              <div class="ui divider"></div>
              <div id="posters">
                <h1>Posters and Demos</h1>
                <div className="ui vertical segment">
                  <div className="ui bulleted list">
                  { posters.map((item) => {
                    return (
                      <div className="item" target="_blank" style={{ lineHeight: '1.8rem' }}>
                        <b>[{ item.series }]</b><br/>
                        <a href={ '/publications/' + item.pdf }><b>{ item.title }</b></a>
                        <br />
                        { item.author }, <i>{ item.booktitle } ({item.series })</i>. { item.publisher }, { item.address }, { item.pages }.
                        <br/>
                        <a href={ '/publications/' + item.pdf } target="_blank" style={{ marginRight: '5px', display: item.pdf ? 'inline' : 'none' }}>[PDF]</a>
                        <a href={ '/publications/' + item.poster } target="_blank" style={{ marginRight: '5px', display: item.poster ? 'inline' : 'none' }}>[Poster]</a>
                        <a href={ '/publications/' + item.slide } target="_blank" style={{ marginRight: '5px', display: item.slide ? 'inline' : 'none' }}>[Slide]</a>
                        <a href={ item.url } target="_blank" style={{ marginRight: '5px', display: item.url ? 'inline' : 'none' }}>[DOI]</a>
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
              {/* Ryo Suzuki All Rights Reserved */}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
