import React from 'react'

import ReactMarkdown from 'react-markdown'
import '../style.css'
import Profile from './profile'
import News from './news'
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
          <a id="go-back-home" href="/"><img src="/static/profile.png" alt="scribble" width="80" height="80" className="img-circle" /></a>
          <h2>Ryo Suzuki</h2>
        </header>
        <div id='container'>
          <div className="block">
          </div>
          <div className="content">
            <section className='post'>
              <Profile />
              <News />
              <Projects />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
