import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../output/summary.json'

import { Link } from '../routes'

const ids = ['reactile', 'pep', 'flux-marker', 'trace-diff', 'mixed-initiative', 'refazer', 'atelier']

let projects = []
for (let id of ids) {
  let key = `output/projects/${id}.json`
  projects.push(summary.fileMap[key])
}

export default () => (
  <div id="projects">
    { projects.map((project) => {
      return (
        <div>
          <Link route={ project.id }>
            <a>Link</a>
          </Link>
          <img width="100" height="100" src={ `/static/images/${ project.image }` } />
          <p>{ project.title }</p>
          <span>{ project.authors }</span>
        </div>
      )
    })}
  </div>
)



/*
2016-05-10: I and [**Niloufar**](http://stanford.edu/~niloufar/) present [**Atelier**](http://hci.stanford.edu/publications/2016/atelier/atelier_2016.pdf) at CHI'16. Here is the [**slide**](/publications/chi-2016-atelier-slide.pdf).

Our work is also featured in the [**media**](https://backchannel.com/its-not-just-robots-skilled-jobs-are-going-to-meatware-954adf770710).
*/