import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <header className="ui stackable grid">
        <div className="one wide column"></div>
        <div className="three wide column centered" style={{ textAlign: 'center' }}>
          <a href="/">
            <img style={{ maxWidth: '200px' }} src="/static/images/profile.png" className="ui image" />
          </a>
        </div>
        <div className="ui eleven wide column">
          <h1 className="ui huge header">
            Ryo Suzuki
            <div class="sub header" style={{ fontSize: '1.5rem'}}>
              Ph.D. student at the University of Colorado Boulder
            </div>
          </h1>
          <div id="profile">
            <p>
              Research in <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"><b>Human-Computer Interaction</b></a>, working with <a href="http://tomyeh.info/"><b>Tom Yeh</b></a>, <a href="http://leithinger.com/"><b>Daniel Leithinger</b></a>, and <a href="http://mdgross.net/">
                <b>Mark D. Gross</b></a>.
            </p>

            <p>
              I make <b>dynamic media for human thinking</b>.
              More specifically, I design and develop <b>explorable environments</b>, in which people can think, design, understand, and communicate ideas through exploration.
              For example, imagine how we think and understand complex ideas in <b>science museums</b>.
              I envision that computers in the 21st century will bring the science-museum-like experience into every room, just like computers in the past century have brought libraries to every desk.
            </p>
          </div>

          <div className="ui horizontal list" style={{ marginTop: '10px' }}>
            <div className="item">
              <a href="https://scholar.google.com/citations?user=klWjaQIAAAAJ">
                <i className="fas fa-graduation-cap fa-fw" />
                Google Scholar
              </a>
            </div>
            <div className="item">
              <a href="http://ryosuzuki.org/cv/cv.pdf">
                <i className="far fa-file fa-fw" />
                Resume/CV
              </a>
            </div>
            <div className="item">
              <a href="mailto:ryo.suzuki@colorado.edu">
                <i className="far fa-envelope fa-fw" />
                ryo.suzuki@colorado.edu
              </a>
            </div>
            <div className="item">
              <a href="https://www.facebook.com/ryosuzk">
                <i className="fab fa-facebook-square fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://twitter.com/ryosuzk">
                <i className="fab fa-twitter fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/ryosuzuki">
                <i className="fab fa-github-alt fa-fw" />
                ryosuzuki
              </a>
            </div>
            <div className="item">
              <a href="https://www.linkedin.com/in/ryosuzuki/">
                <i className="fab fa-linkedin-in fa-fw" />
                ryosuzuki
              </a>
            </div>


          </div>

        </div>
        <div className="one wide column"></div>

      </header>
    )
  }
}

export default Profile
