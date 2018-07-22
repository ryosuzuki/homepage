import React from 'react'
import ReactMarkdown from 'react-markdown'

import items from './projects.json'

export default () => (
  <div id="projects">
    { items.map((item) => {
      return (
        <div>
          <img width="100" height="100" src={ `/static/${ item.image }` } />
          <p>{ item.title }</p>
          <span>{ item.authors }</span>
        </div>
      )
    })}
  </div>
)



/*
2016-05-10: I and [**Niloufar**](http://stanford.edu/~niloufar/) present [**Atelier**](http://hci.stanford.edu/publications/2016/atelier/atelier_2016.pdf) at CHI'16. Here is the [**slide**](/publications/chi-2016-atelier-slide.pdf).

Our work is also featured in the [**media**](https://backchannel.com/its-not-just-robots-skilled-jobs-are-going-to-meatware-954adf770710).
*/