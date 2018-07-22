import React from 'react'
import ReactMarkdown from 'react-markdown'

const input = `
### Profile

Hi, I'm Ryo Suzuki, a Ph.D. student in Computer Science at the [**University of Colorado Boulder**](http://www.colorado.edu/cs/), [Human-Centered Computing lab](http://hcc.colorado.edu/), working with [**Tom Yeh**](http://tomyeh.info/), [**Mark D. Gross**](http://mdgross.net/), and [**Daniel Leithinger**](http://leithinger.com/).

**Publications:**
[<i class="fa fa-graduation-cap fa-fw"></i> Google Scholar](https://scholar.google.com/citations?user=klWjaQIAAAAJ)
`


export default () => (
  <div id="profile">
    <ReactMarkdown source={input} />
  </div>
)