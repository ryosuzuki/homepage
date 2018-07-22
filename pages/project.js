import React from 'react'
import ReactMarkdown from 'react-markdown'

import summary from '../output/summary.json'
import {Router} from '../routes'

import Link from 'next/link'


class Project extends React.Component {

  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }


  render() {
    return (
      <div id="project">
        { this.props.id }
      </div>
    )
  }
}

export default Project