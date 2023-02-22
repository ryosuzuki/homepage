import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

const ids = [
  'ultrabots', 
]

let posters = []
for (let id of ids) {
  const poster = require(`../content/output/posters/${id}.json`)
  posters.push(poster)
}

class Posters extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="posters" >
        <h1>Selected Posters and Demos</h1>
        { posters.map((poster) => {
          return (
            <div className="project ui vertical segment stackable grid" data-id={ poster.id } >
              <div className="six wide column">
                { poster.id }
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posters
