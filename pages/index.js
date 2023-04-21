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

<div id="vision">
<h2 className="ui horizontal divider header">
  Mission
</h2>
<h1 className="mission">Designing Pervasive Dynamic Media With the Power of AR and AI</h1>
<p className="description">
Computers are dynamic media. Much like writing systems, the printing press and painting canvases, they empower and amplify human thought and creativity. This medium, however, is currently confined within the boundaries of flat rectangular screens, restricting our minds and creative potential to what can be done in this small space. Our goal is to redesign this medium to unlock the full potential of human capabilities, by transforming our world itself into a computational medium with the power of AR and AI.
</p>

<h2 className="ui horizontal divider header">
  Principles
</h2>

<div className="ui three stackable cards">
  <div className="card">
    <div className="content">
      <h1>Real World</h1>
      <div className="header">
        Should Work with Real Objects in the Real World, not Virtual Objects on Screens
      </div>
      <div className="description">
        Humans have developed tangible and spatial abilities. Media should leverage these innate human capabilities, instead of requiring humans to adapt to media’s capabilities.
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1>Dynamic</h1>
      <div className="header">
        Should Leverage Dynamic and Explorable Representations, not Static and Passive Ones
      </div>
      <div className="description">
        Human thought and creative process is fluid. Media should harness this dynamic and explorable potential, beyond merely watching and consuming static text or passive content.
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1>Pervapsive</h1>
      <div className="header">
        Should Work with Every Space, Object, and User, On-the-Fly and On-Demand
      </div>
      <div className="description">
        Tangible user interfaces exist over decades, but only in research labs. It is time to make them accessible, adaptable, and deployable to everywhere with the power of AI.
      </div>
    </div>
  </div>
</div>

<h2 className="ui horizontal divider header">
  Umbrella Themes
</h2>

<div className="ui five stackable cards">
  <div className="card">
    <div className="content">
      <h1>Augmented Languages</h1>
      <div className="header">
        Reinvent Languages for AR Era
      </div>
      <div className="description">
        Dynamic pervasive media for reading, writing, presenting, discussing, and communicating ideas
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1>Explorable Environments</h1>
      <div className="header">
        Science Museums for Every Home
      </div>
      <div className="description">
        Dynamic pervasive media for learning, understanding, exploring, and discovering concepts
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1>World Canvas</h1>
      <div className="header">
        Make the World a Dynamic Canvas
      </div>
      <div className="description">
        Dynamic pervasive media for creating, sketching, expressing, authoring ideas
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1>Responsive Environments</h1>
      <div className="header">
        Respond Both Visually and Physically
      </div>
      <div className="description">
        Dynamic pervasive media for touching, crafting, feeling, grasping, and manipulating objects
      </div>
    </div>
  </div>


  <div className="card">
    <div className="content">
      <h1>Adaptive Reality</h1>
      <div className="header">
        Ambient and Context-Aware Intelligence
      </div>
      <div className="description">
        Dynamic pervasive media for adapting, reminding, visualizing, and assisting behaviors
      </div>
    </div>
  </div>

</div>


<h2 className="ui horizontal divider header">
  Projects
</h2>

<div className="ui five cards">
  <div className="card">
    <div class="image">
      <img src="/static/images/project-realitytalk.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2022
      </div>
      <div className="header">
        RealityTalk
      </div>
      <div className="description">
        Augmented Presentation
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-realitysketch.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2020
      </div>
      <div className="header">
        RealitySketch
      </div>
      <div className="description">
        Visualize Everyday Motion
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-sketched-reality.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2022
      </div>
      <div className="header">
        Sketched Reality
      </div>
      <div className="description">
        AR Sketch for Robots
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-roomshift.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        CHI 2020
      </div>
      <div className="header">
        RoomShift
      </div>
      <div className="description">
        Reconfigurable Rooms
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-teachable-reality.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        CHI 2023
      </div>
      <div className="header">
        Teachable Reality
      </div>
      <div className="description">
        Tangible AR Everywhere
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-chameleon-control.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        CHI 2023
      </div>
      <div className="header">
        ChameleonControl
      </div>
      <div className="description">
        Augmented Presentation
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-shapebots-3.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2019
      </div>
      <div className="header">
        ShapeBots
      </div>
      <div className="description">
        Swarm Robot Assistant
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-reactile.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        CHI 2018
      </div>
      <div className="header">
        Reactile
      </div>
      <div className="description">
        Sketch to Program
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-hapticbots.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2021
      </div>
      <div className="header">
        HapticBots
      </div>
      <div className="description">
        On-Demand Haptics
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-lifttiles.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        TEI 2020
      </div>
      <div className="header">
        LiftTiles
      </div>
      <div className="description">

      </div>
    </div>
  </div>



</div>


</div>

{/*
<div className="teaser project ui vertical segment stackable grid" data-id="" >
  <a id="lab" href="https://programmable-reality-lab.github.io/" target="_blank">
    <h1>Programmable Reality Lab</h1>
    <img src="/static/images/lab-1.jpg"></img>
  </a>
</div>
<div className="teaser project ui vertical segment stackable grid" data-id="" >
  <img src="/static/images/overview.jpg"></img>
</div>
*/}
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
                        <div className="project ui vertical segment stackable grid" data-id="" >
                          <div className="six wide column">
                            <a href={ `/phd-thesis` }>
                              <img className="ui rounded images" src={ `/static/posters/${item.id}.jpg` } />
                            </a>

                          </div>
                          <div className="ten wide column">
                            <h1 className="ui header" style={{ marginBottom: '10px' }}>
                                <span>{ item.name }</span>
                              <span className="ui big label">{ item.series }</span>
                              <span className="ui teal large label" style={{ display: ['morphio'].includes(item.id) ? 'inline-block' : 'none' }}>Best Paper Award</span>
                              <span className="ui teal large label" style={{ display: ['realitysketch'].includes(item.id) ? 'inline-block' : 'none' }}>Honorable Mention Award</span>
                            </h1>

                            <div className="item" target="_blank" style={{ lineHeight: '1.8rem' }}>
                              <a href={ '/publications/' + item.pdf }><b>{ item.title }</b></a>
                              <br />
                              { item.author }.
                              <br/>
                              <a href={ '/publications/' + item.pdf } target="_blank" style={{ marginRight: '5px', display: item.pdf ? 'inline' : 'none' }}>[PDF]</a>
                              <a href={ '/publications/' + item.poster } target="_blank" style={{ marginRight: '5px', display: item.poster ? 'inline' : 'none' }}>[Poster]</a>
                              <a href={ '/publications/' + item.slide } target="_blank" style={{ marginRight: '5px', display: item.slide ? 'inline' : 'none' }}>[Slide]</a>
                              <a href={ `http://doi.acm.org/${item.doi}` } target="_blank" style={{ marginRight: '5px', display: item.doi ? 'inline' : 'none' }}>[DOI]</a>
                              <a href={ item.video } target="_blank" style={{ marginRight: '5px', display: item.video ? 'inline' : 'none' }}>[Video]</a>
                            </div>
                          </div>
                        </div>
                      )

                    /*
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
                    */
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
