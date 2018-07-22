import React from 'react'

import ReactMarkdown from 'react-markdown'
import '../style.css'
import updates from '../output/updates.json'
import experience from '../output/experience.json'
import awards from '../output/awards.json'
import activities from '../output/activities.json'

import Profile from './profile'
import Projects from './projects'
import Experience from './experience'
import Timeline from './timeline'


class Index extends React.Component {
  render() {

    const items = [
      { title: 'hoge' },
      { title: 'fuga' }
    ]
    return (
      <div>
        <Profile />

        <div className="ui stackable grid">
          <div className="one wide column"></div>

          <div id="side" className="three wide column centered">
            <Experience />
            <Timeline />
          </div>

          <div id="container" className="eleven wide column centered">
            <section>

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
          <div className="one wide column"></div>

        </div>
      </div>
    )
  }
}

export default Index
