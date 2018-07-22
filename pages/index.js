import React from 'react'

import ReactMarkdown from 'react-markdown'
import '../style.css'
import profile from '../output/profile.json'
import updates from '../output/updates.json'
import experience from '../output/experience.json'
import awards from '../output/awards.json'
import activities from '../output/activities.json'

import Projects from './projects'

class Index extends React.Component {
  render() {

    const items = [
      { title: 'hoge' },
      { title: 'fuga' }
    ]
    return (
      <div>
        <header>
          <a id="go-back-home" href="/"><img src="/static/images/profile.png" alt="scribble" width="80" height="80" className="img-circle" /></a>
          <h2>Ryo Suzuki</h2>
        </header>
        <div id='container'>
          <div className="block">
          </div>
          <div className="content">
            <section className='post'>
              <div id="profile">
                <ReactMarkdown source={ profile.bodyContent } />
              </div>
              <div id="updates">
                <ReactMarkdown source={ updates.bodyContent } />
              </div>

              <Projects />

              <div id="experience">
                <ReactMarkdown source={ experience.bodyContent } />
              </div>
              <div id="awards">
                <ReactMarkdown source={ awards.bodyContent } />
              </div>
              <div id="activities">
                <ReactMarkdown source={ activities.bodyContent } />
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
