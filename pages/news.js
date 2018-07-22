import React from 'react'
import ReactMarkdown from 'react-markdown'

import items from '../output/news.json'


export default () => (
  <div id="updates">
    { items.map((item) => {
      return (
        <div>
          <span>{ item.date }</span>
          <ReactMarkdown source={ item.text } />
        </div>
      )
    })}
  </div>
)


/*
2016-05-10: I and [**Niloufar**](http://stanford.edu/~niloufar/) present [**Atelier**](http://hci.stanford.edu/publications/2016/atelier/atelier_2016.pdf) at CHI'16. Here is the [**slide**](/publications/chi-2016-atelier-slide.pdf).

Our work is also featured in the [**media**](https://backchannel.com/its-not-just-robots-skilled-jobs-are-going-to-meatware-954adf770710).
*/