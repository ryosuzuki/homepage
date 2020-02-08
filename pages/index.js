import React from 'react'

import ReactMarkdown from 'react-markdown'
import '../static/css/style.css'
import experience from '../content/output/experience.json'
import fellowship from '../content/output/fellowship.json'
import activities from '../content/output/activities.json'
import publications from '../content/output/publications.json'
import posters from '../content/output/posters.json'
import press from '../content/output/press.json'


import Profile from './profile'
import Projects from './projects'
import Experience from './experience'
import Timeline from './timeline'


class Index extends React.Component {
  componentDidMount() {
    // $('a').attr('target', 'blank');
  }

  render() {

    return (
      <div>
        <title>Ryo Suzuki | University of Colorado Boulder</title>
        <div className="ui stackable grid">
          <div className="one wide column"></div>

          <div className="eleven wide column centered">
            <Profile />

            <section id="container">
              <Projects />

              <div className="ui divider"></div>
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

              <div className="ui divider"></div>
              <div id="press">
                <h1>Selected Press Coverage</h1>
                <div className="ui vertical segment">
                <div className="ui bulleted list">
                  { press.map((item) => {
                    return (
                      <div className="item">
                        <a href={ item.url } target="_blank">
                          [{ item.date }] <b>{ item.media }</b> <i>{ item.title }</i>
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="ui divider"></div>
              <div id="activities">
                <h1>Professional Activities</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ activities.bodyContent } />
                </div>
              </div>
              <div className="ui divider"></div>
              <div id="fellowship">
                <h1>Funding and Fellowship</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ fellowship.bodyContent } />
                </div>
              </div>
              </div>
            </section>


          </div>


          <div id="side" className="three wide column centered" style={{ marginTop: '50px'}}>
            <Experience />
            <Timeline />

            <br />
            <a className="twitter-timeline" height="1500px" href="https://twitter.com/ryosuzk?ref_src=twsrc%5Etfw">Tweets by @ryosuzk</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
