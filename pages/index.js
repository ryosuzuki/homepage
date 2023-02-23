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
import Posters from './posters'
import Students from './students'
import Experience from './experience'
import Timeline from './timeline'


class Index extends React.Component {
  componentDidMount() {
    // $('a').attr('target', 'blank');
  }

  render() {

    return (
      <div>
        <title>Ryo Suzuki | University of Calgary Assistant Professor</title>
        <div className="ui stackable grid">
          <div className="one wide column"></div>

          <div className="eleven wide column centered">
            <Profile />

            <section className="container">
        <div className="teaser project ui vertical segment stackable grid" data-id="" >
          <a id="lab" href="https://programmable-reality-lab.github.io/" target="_blank">
            <h1>Programmable Reality Lab</h1>
            <img src="/static/images/lab-1.jpg"></img>
          </a>
        </div>
        <div className="teaser project ui vertical segment stackable grid" data-id="" >
          <img src="/static/images/overview.jpg"></img>
        </div>  
            </section>
            <section className="container">
              <Students />
            </section>

            <section className="container">
              <Projects />
            </section>

            <section className="container">
              <div id="dissertation">
                <h1>PhD Dissertation</h1>
                <div className="project ui vertical segment stackable grid" data-id="" >
                  <div className="six wide column">
                    <a href={ `/phd-thesis` }>
                      <img className="ui rounded images" src={ `/static/images/collective.jpg` } />
                    </a>

                  </div>
                  <div className="ten wide column">
                    <a href={ `phd-thesis` }>
                      <h1 className="ui header" style={{ marginBottom: '10px' }}>
                        Collective Shape-changing Interfaces
                        {/*<span className="ui big label">PhD Thesis</span>*/}
                      </h1>
                      <h2 style={{ margin: '5px 0' }}>
                      Dynamic Shape Construction and Transformation with Collective Elements
                      </h2>
                    </a>
                    <p>
                      <br/>
                      <strong>Ryo Suzuki</strong><br/>
                      PhD Dissertation (University of Colorado Boulder)
                      <br/>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="container">
              {/*<Posters />*/}

              <div id="posters">
                <h1>Selected Posters and Demos</h1>
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
            </section>

            <section className="container">
              <div id="press">
                <h1>Press Coverage</h1>
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
              </div>
            </section>

            <section className="container">
              <div id="activities">
                <h1>Professional Activities</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ activities.bodyContent } />
                </div>
              </div>
            </section>

            <section className="container">
              <div id="fellowship">
                <h1>Funding and Fellowship</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ fellowship.bodyContent } />
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
