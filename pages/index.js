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
<p>From <b><a href="https://en.wikipedia.org/wiki/Tools_for_Thought" target="_blank">Tools for Thought</a></b> to <b>Space for Thought</b></p>
<h2 className="ui horizontal divider header">
  Mission
</h2>
<h1 className="mission"><span className="highlight">Dynamic Space for Thought</span></h1>
<h1 className="mission">Augment Human Thought and Creativity<br/>with the Power of <span className="highlight">AR</span> and <span className="highlight">AI</span></h1>
{/*<h1 className="mission"><span className="highlight">Dynamic Space for Thought</span><br/>with the Power of <span className="highlight">AR</span> and <span className="highlight">AI</span></h1>*/}
{/*<h1 className="mission">Designing <span className="highlight">Dynamic Pervasive Media</span> With the Power of <span className="highlight">AR</span> and <span className="highlight">AI</span></h1>*/}
<p className="description">
Computers are dynamic media. Much like writing systems, the printing press and painting canvases, they empower and amplify human thought and creativity. This medium, however, is currently confined within the boundaries of flat rectangular screens, restricting our minds and creative potential to what can be done in this small space. Our goal is to redesign this medium to unlock the full potential of human capabilities, by transforming our world itself into a computational medium with the power of AR and AI.
</p>

<h2 className="ui horizontal divider header">
  Principles
</h2>

<div className="ui three stackable cards">
  <div className="card">
    <div className="content">
      <h1 className="highlight">Blended</h1>
      <div className="header">
        Should Work with Real, Tangible Objects in the Real World, not Virtual Objects on Screens or in VR
      </div>
      <div className="description">
        Humans have developed tangible and spatial abilities. Media should leverage these innate human capabilities, instead of requiring humans to adapt to media’s capabilities.
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <h1 className="highlight">Dynamic</h1>
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
      <h1 className="highlight">Pervasive</h1>
      <div className="header">
        Should Work with Every Single Space, Object, and Environment, On-the-Fly and On-Demand
      </div>
      <div className="description">
        Tangible user interfaces exist over decades, but only in research labs. It is time to make them accessible, adaptable, and deployable to everywhere for everyone with the power of AI.
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
      <div class="image">
        <img src="/static/images/theme-1.jpg" />
      </div>
      <h1>Augmented Languages</h1>
      <div className="header">
        Reinvent Languages for AR Era
      </div>
      <div className="description">
        We redsign "languages", including written, spoken, and visual languages, to empower human-to-human communication
      </div>
      <br/>
      ― Dynamic Media for ―<br/>
      <div className="labels">
        <div className="ui tiny label">reading</div>
        <div className="ui tiny label">presenting</div>
        <div className="ui tiny label">writing</div>
        <div className="ui tiny label">communicating</div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <div class="image">
        <img src="/static/images/theme-2.jpg" />
      </div>
      <h1>Explorable Environments</h1>
      <div className="header">
        Science Museums for Every Home
      </div>
      <div className="description">
        We transform our everyday space into explorable environments where people can learn through tangible exploration just like science museums.
      </div>
      ― Dynamic Media for ―<br/>
      <div className="labels">
        <div className="ui tiny label">learning</div>
        <div className="ui tiny label">understanding</div>
        <div className="ui tiny label">exploring</div>
        <div className="ui tiny label">discovering</div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <div class="image">
        <img src="/static/images/theme-3.jpg" />
      </div>
      <h1>Dynamic World Canvas</h1>
      <div className="header">
        Make the World a Dynamic Canvas
      </div>
      <div className="description">
        We unleash the creative expression and potential of computers beyond screens, as if the entire world becomes a dynamic and living canvas.
      </div>
      ― Dynamic Media for ―<br/>
      <div className="labels">
        <div className="ui tiny label">sketching</div>
        <div className="ui tiny label">expressing</div>
        <div className="ui tiny label">authoring</div>
        <div className="ui tiny label">creating</div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="content">
      <div class="image">
        <img src="/static/images/theme-4.jpg" />
      </div>
      <h1>Responsive Physical World</h1>
      <div className="header">
        Respond Both Visually and Physically
      </div>
      <div className="description">
        Both visual and physical representations are equally important. We make environments responsive both visually and physically with AR and robotics
      </div>
      ― Dynamic Media for ―<br/>
      <div className="labels">
        <div className="ui tiny label">touching</div>
        <div className="ui tiny label">crafting</div>
        <div className="ui tiny label">feeling</div>
        <div className="ui tiny label">manipulating</div>
      </div>
    </div>
  </div>


  <div className="card">
    <div className="content">
      <div class="image">
        <img src="/static/images/theme-5.jpg" />
      </div>
      <h1>Adaptive Reality</h1>
      <div className="header">
        Ambient and Context-Aware Intelligence
      </div>
      <div className="description">
        We make dynamic media pervasive and ubiquitous with the power of AR and AI, disappearing them into the fabric of everyday life.
      </div>
      <br/>
      ― Dynamic Media for ―<br/>
      <div className="labels">
        <div className="ui tiny label">adapting</div>
        <div className="ui tiny label">reminding</div>
        <div className="ui tiny label">visualizing</div>
        <div className="ui tiny label">assisting</div>
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
      <img src="/static/images/project-augmented-math.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2023
      </div>
      <div className="header">
        <a href="/augmented-math" target="_blank">Augmented Math</a>
      </div>
      <div className="description">
        AI-Enabled Augmented Textbook
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-realitycanvas.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2023
      </div>
      <div className="header">
        <a href="/realitycanvas" target="_blank">RealityCanvas</a>
      </div>
      <div className="description">
        Dynamic Sketch in AR
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-holobots.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2023
      </div>
      <div className="header">
        <a href="/holobots" target="_blank">HoloBots</a>
      </div>
      <div className="description">
        Tangible Holoportation
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
        <a href="/teachable-reality" target="_blank">Teachable Reality</a>
      </div>
      <div className="description">
        AI-Enabled Tangible AR Prototype
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
        <a href="/chameleon-control" target="_blank">ChameleonControl</a>
      </div>
      <div className="description">
        Human Teleoperation
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-realitytalk.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2022
      </div>
      <div className="header">
        <a href="/realitytalk" target="_blank">RealityTalk</a>
      </div>
      <div className="description">
        Augmented Presentation
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
        <a href="/sketched-reality" target="_blank">Sketched Reality</a>
      </div>
      <div className="description">
        AR Sketch for Robots
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-shapebots-3.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        CHI 2022
      </div>
      <div className="header">
        <a href="https://ilab.ucalgary.ca/ar-and-robotics/" target="_blank">AR and Robotics</a>
      </div>
      <div className="description">
        A Survey and Taxonomy
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
        <a href="/hapticbots" target="_blank">HapticBots</a>
      </div>
      <div className="description">
        On-Demand Haptics
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
        <a href="/realitysketch" target="_blank">RealitySketch</a>
      </div>
      <div className="description">
        Visualize Everyday Motion
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
        <a href="/roomshift" target="_blank">RoomShift</a>
      </div>
      <div className="description">
        Reconfigurable Rooms
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-shapebots.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2019
      </div>
      <div className="header">
        <a href="/shapebots" target="_blank">ShapeBots</a>
      </div>
      <div className="description">
        Swarm Robots as Dynamic Media
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
        <a href="/reactile" target="_blank">Reactile</a>
      </div>
      <div className="description">
        Sketch to Program Swarm Robots
      </div>
    </div>
  </div>

  <div className="card">
    <div class="image">
      <img src="/static/images/project-dynablock-1.jpg" />
    </div>
    <div className="content">
      <div className="ui tiny label">
        UIST 2018
      </div>
      <div className="header">
        <a href="/dynablock" target="_blank">Dynablock</a>
      </div>
      <div className="description">
        3D Printer as Dynamic Media
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

            {/*
            <section className="container">
              <div id="fellowship">
                <h1>Funding and Fellowship</h1>
                <div className="ui vertical segment">
                  <ReactMarkdown source={ fellowship.bodyContent } />
                </div>
              </div>
            </section>
            */}
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
