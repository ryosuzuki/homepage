import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <header className="ui stackable grid">
        <div className="ui sixteen wide column">
          <h1 className="ui huge header">
            <img style={{ maxWidth: '62px', marginRight: '15px' }} src="/static/images/profile.png" className="ui circular image" />
            <div className="content">
              Ryo Suzuki
              <div className="sub header" style={{ fontSize: '1.5rem'}}>
                <b>University of Calgary</b>, Assistant Professor in Computer Science
              </div>
            </div>
          </h1>

          <video id="top-video" poster="/static/posters/top.png" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
            {/*
            <source src="/static/webm/top.webm" type="video/webm"></source>
            */}
            <source src="/static/video/top.mp4" type="video/mp4"></source>
          </video>

          <div id="profile" style={{ fontSize: '1.3rem' }}>
            <p>
              I am an Assistant Professor at the <a href="https://ucalgary.ca" target="_blank"><b>University of Calgary</b></a> in the <a href="https://science.ucalgary.ca/computer-science" target="_blank"><b>Department of Computer Science</b></a>, starting in Winter 2021.
              I am part of <a href="https://ilab.cpsc.ucalgary.ca/" target="_blank"><b>HCI Group</b></a> at UCalgary.
            </p>
            <div class="ui segment" style={{ borderColor: '#191970' }}>
              <p style={{ marginBottom: '-5px', color: '#191970'}}>
                I am actively looking for <b>PhDs, masters, postdocs, or interns</b>, who are interested in joining or collaborating with us, across disciplines (e.g., <b>Industrial Design, Mechanical Engineering, Material Science, Electrical Engineering, Architectural Design, and Computer Science</b>). If you are interested, please feel free to send me an email. We could start from some possible collaborative projects. :)
              </p>
            </div>

            {/*
            <div class="ui segment" style={{ borderColor: '#2ECC40' }}>
              <p style={{ marginBottom: '-5px'}}>
                <b style={{ color: '#2ECC40' }}>I'm on the job market this year, open to both academia and industry. Please feel free to contact me.</b>

              </p>
              <p>
                <a className="ui inverted green button" href="/static/jobs/Research_Statement.pdf" target="_blank" style={{ marginTop: '20px'}}><b>
                  <i className="far fa-file-pdf fa-fw" />
                  Research Statement
                </b></a>
                &nbsp;&nbsp;&nbsp;
                <a className="ui inverted green button" href="/static/jobs/Teaching_Statement.pdf" target="_blank" style={{ marginTop: '20px'}}><b>
                  <i className="far fa-file-pdf fa-fw" />
                  Teaching Statement
                </b></a>
                &nbsp;&nbsp;&nbsp;
                <a className="ui inverted green button" href="/static/jobs/Diversity_Statement.pdf" target="_blank" style={{ marginTop: '20px'}}><b>
                  <i className="far fa-file-pdf fa-fw" />
                  Diversity Statement
                </b></a>
                &nbsp;&nbsp;&nbsp;
                <a className="ui inverted green button" href="/cv.pdf" target="_blank" style={{ marginTop: '20px'}}><b>
                  <i className="far fa-file-pdf fa-fw" />
                  Resume/CV
                </b></a>
              </p>
            </div>
            */}
            <p>
              My research interest lies on the intersection at <b>Human-Computer Interaction (HCI)</b> and <b>Robotics</b>. I direct <b><a href="https://programmable-reality-lab.github.io/" target="_blank">Programmable Reality Lab</a></b> at the University of Calgary, where we try to blend digital and physical worlds by exploring novel interactions for <b>AR/VR, tangible, and shape-changing interfaces</b>.
            </p>

            <p>
              Previously, I was a PhD student at the <a href="https://www.colorado.edu/cs/" target="_blank"><b>University of Colorado Boulder</b></a>, advised by <a href="http://leithinger.com/" target="_blank"><b>Daniel Leithinger</b></a> and <a href="http://mdgross.net/" target="_blank"><b>Mark D. Gross</b></a> in <a href="https://www.colorado.edu/atlas/thing-lab" target="_blank"><b>THING Lab</b></a> and <a href="http://hcc.colorado.edu/" target="_blank"><b>Human-Computer Interaction Group</b></a>
               { /* , <a href="http://mdgross.net/" target="_blank"><b>Mark D. Gross</b></a> , and <a href="http://tomyeh.info/" target="_blank"><b>Tom Yeh</b></a>
                */ }
            </p>

              {/*
                I make <b>a dynamic medium</b> for <b>human-computer interaction</b>. More specifically, I explore a novel computational medium that can potentially augment and transform our ways of thinking, designing, understanding, creating, communicating, and exploring ideas. I believe such a computational medium will not be only limited on a computer screen, but will become <b>a whole environment</b>, including space and physical objects, that can dynamically change and leverage our entire bodies to explore ideas, just like what we do in a science museum.
              */}
              {/*
                a dynamic medium for creative thought
                a dynamic medium to enhance creativity
                a dynamic medium for human's creative activities

                to design interactive and explorable environments

                explore how dynamic computational media can contribute to new ways of thinking, designing, understanding, and communicating ideas through more interactive and explorable mannar.

                Towards this goal, I have been working on several aspects of this computational environment, including:
                1) <b>hardware</b>: how to make our static physical environment into a dynamic one and how to democratize such an environment for every home, school, and work space,
                2) <b>authoring tools</b>: how to support designing and authoring a dynamic content through more direct and intuitive ways of programming, and
                3) <b>representations</b>: how to represent ideas for more understandable ways and how to design interaction for such dynamic representations.
              */}
          </div>

          <div className="ui horizontal list" style={{ marginTop: '20px' }}>
            <div className="item">
              <a href="https://scholar.google.com/citations?user=klWjaQIAAAAJ" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fas fa-graduation-cap fa-fw" />
                Google Scholar
              </a>
            </div>
            <div className="item">
              <a href="/cv.pdf" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-file fa-fw" />
                CV
              </a>
            </div>
            <div className="item">
              <a href="mailto:ryo.suzuki@ucalgary.ca" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-envelope fa-fw" />
                Email
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
              <a href="https://twitter.com/HCI_Comics" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-twitter fa-fw" />
                HCI_Comics (ja)
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

            <a id="lab" href="https://programmable-reality-lab.github.io/" target="_blank">
              <h1>Programmable Reality Lab</h1>
              <img src="/static/images/lab-1.jpg"></img>
            </a>
              <img src="/static/images/overview.jpg" style={{ marginTop: '50px' }}></img>


          </div>

        </div>
        <div className="one wide column"></div>

      </header>
    )
  }
}

export default Profile
