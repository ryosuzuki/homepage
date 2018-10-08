import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <header className="ui stackable grid">
        <div className="ui sixteen wide column">
          <h1 className="ui huge header">
            Ryo Suzuki
            <div class="sub header" style={{ fontSize: '1.5rem'}}>
              Ph.D. student at the University of Colorado Boulder
            </div>
          </h1>
          <div id="profile" style={{ fontSize: '1.3rem' }}>
            <p>
              Research in <a href="http://hcc.colorado.edu/" target="_blank"><b>Human-Computer Interaction</b></a>, working with <a href="http://tomyeh.info/" target="_blank"><b>Tom Yeh</b></a>, <a href="http://leithinger.com/" target="_blank"><b>Daniel Leithinger</b></a>, and <a href="http://mdgross.net/" target="_blank"><b>Mark D. Gross</b></a>.
            </p>
            <p>
              I am a Ph.D. student at the University of Colorado Boulder, Department of Computer Science.
              <br/>
              I make <b>a dynamic medium</b> for human thought. More specifically, I explore how interactive and explorable environments can transform our ways of thinking, designing, understanding, and communicating ideas. I believe such a computational medium will not be only limited on a computer screen, but will become <b>a whole environment</b> that can dynamically change and leverage our entire bodies to explore ideas, just like what we do in a science museum.
              {/* explore how dynamic computational media can contribute to new ways of thinking, designing, understanding, and communicating ideas through more interactive and explorable mannar. */}
              <br/>
              <br/>

              Towards this goal, I have been working on several aspects of this computational environment, including:
              1) <b>hardware</b>: how to make our static physical environment into a dynamic one and how to democratize such a dynamic environment for every home, school, and working space,
              2) <b>authoring tools</b>: how to support designing and authoring a dynamic content through more direct and intuitive ways of programming, and
              3) <b>representations</b>: how to represent ideas for more understandable ways and how to design interaction for such dynamic representations.

            </p>
          </div>

          <div className="ui horizontal list" style={{ marginTop: '10px' }}>
            <div className="item">
              <a href="https://scholar.google.com/citations?user=klWjaQIAAAAJ" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fas fa-graduation-cap fa-fw" />
                Google Scholar
              </a>
            </div>
            <div className="item">
              <a href="/cv.pdf" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-file fa-fw" />
                Resume/CV
              </a>
            </div>
            <div className="item">
              <a href="mailto:ryo.suzuki@colorado.edu" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-envelope fa-fw" />
                ryo.suzuki@colorado.edu
              </a>
            </div>
            <div className="item">
              <a href="https://www.facebook.com/ryosuzk" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-facebook-square fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://twitter.com/ryosuzk" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-twitter fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/ryosuzuki" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-github-alt fa-fw" />
                ryosuzuki
              </a>
            </div>
            <div className="item">
              <a href="https://www.linkedin.com/in/ryosuzuki/" target="_blank" style={{ fontSize: '1.2em' }}>
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
