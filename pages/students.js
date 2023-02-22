import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/ilab-summary.json'

const names = [
  'shivesh-jadon', 
  'neil-chulpongsatorn',
  'marcus-friedel',
  'adnan-karim',
  'aditya-gunturu',
  'mehrad-faridan',
  'jian-liao',
  'zhijie-xia',
  'nishan-soni',
  'bheesha-kumari',
  'jarin-thundathil',
  'kevin-van',
  'melissa-hoang',
  'abhinav-pillai',
  'keiichi-ihara',
  'mille-skovhus-lunding',
  'rasmus-lunding',
  'ryota-gomi',
  'kyzyl-monteiro',
  'hiroki-kaimoto',
  'ritik-vatsal',
  'shrivatsa-mishra',
  'tian-xia',
  'christopher-rodriguez',
  'harrison-chen',
  'kaynen-mitchell',
  'manjot-khangura',
  'manuel-rodriguez',
]

let students = []
for (let name of names) {
  let student = summary.fileMap[`content/output/people/${name}.json`]
  student.id = name
  student.photo = `https://raw.githubusercontent.com/ucalgary-ilab/ilab-website/master/static/images/people/${name}.jpg`
  students.push(student)
}

class Students extends React.Component {
  componentDidMount() {
  }

  renderLink(student, key) {
    if (!student[key]) {
      return ''
    }

    let title = student[key].split('/')[3]
    let href
    let icon
    switch(key) {
      case 'url':
        icon = 'fas fa-link fa-fw'
        break
      case 'scholar': 
        icon = 'fas fa-graduation-cap fa-fw'
        break
      case 'twitter':
        icon = 'fab fa-twitter fa-fw'
        break
      case 'facebook':
        icon = 'fab fa-facebook-square fa-fw'
        break
      case 'github':
        icon = 'fab fa-github-alt fa-fw'
        break
      case 'cv':
        icon = 'far fa-file fa-fw'
        break
      case 'email':
        icon = 'far fa-envelope fa-fw'
        break
      case 'linkedin':
        icon = 'fab fa-linkedin-in fa-fw'
        break
    }

    return (
      <div className="item">
        <a href={ student[key] } target="_blank" style={{ fontSize: '1.2em' }}>
          <i className={ icon } />
        </a>
      </div>
    )
  }  

  getTitle(student) {
    switch (student.type) {
      case 'postdoc':
        student.title = 'Postdoc'
        break
      case 'phd':
        student.title = 'PhD'
        break
      case 'master':
        student.title = 'Master'
        break
      case 'undergrad':
        student.title = 'Undergrad'
        break
      case 'visiting':
        student.title = 'Visiting'
        break
      case 'alumni':
        switch (student.past) {
          case 'postdoc':
            student.title = 'Alumni (PostDoc)'
            break
          case 'phd':
            student.title = 'Alumni (PhD)'
            break
          case 'master':
            student.title = 'Alumni (Master)'
            break
          case 'undergrad':
            student.title = 'Alumni (Undergrad)'
            break
          case 'visiting':
            student.title = 'Alumni (Visiting)'
            break
        }
        break
    }
    return student
  }

  renderStudent(student) {
    student = this.getTitle(student)
    return (
      <a className="card" href={`https://ilab.ucalgary.ca/people/${student.id}`} target="_blank">
        <div className="center aligned">
          <div className="image profile-container">
            <img className="ui rounded profile image" src={ student.photo } />
          </div>
          <div className="header">
            { student.name } <br/>
            <span className="meta">
              { student.title }
            </span>
          </div>
        </div>
      </a>
    )
  }

  render() {
    return (
      <div id="students" >
        <h1>Students</h1>
        <h3>Current Students</h3>
        <div className="ui eight cards">
          { students.filter(student => student.type !== 'alumni').map((student) => {
            return this.renderStudent(student)
          })}
        </div>
        <h3>Alumni</h3>
        <div className="ui eight cards">
          { students.filter(student => student.type === 'alumni').map((student) => {
            return this.renderStudent(student)
          })}
        </div>
      </div>
    )
  }
}

export default Students
