import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/ilab-summary.json'

const names = [
  'shivesh-jadon', 
  'neil-chulpongsatorn',
  'marcus-friedel',
  'adnan-karim',
  'mehrad-faridan',
  'jian-liao',
  'zhijie-xia',
  'bheesha-kumari',
  'jarin-thundathil',
  'kevin-van',
  'melissa-hoang',
  'abhinav-pillai',
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
  student.url = `https://ilab.ucalgary.ca/people/${student.id}`
  students.push(student)
}

let current = [
{
  id: 'hye-young-jo',
  name: 'Hye-Young Jo',
  photo: 'https://static.wixstatic.com/media/9e9fd8_421f3f1efc0842c8a9cd6801d334dc94~mv2.jpg',
  title: 'PhD Student',
  url: 'https://www.hyeyoungjo.com/'
},
{
  id: 'keiichi-ihara',
  name: 'Keiichi Ihara',
  photo: 'https://www.iplab.cs.tsukuba.ac.jp/~kihara/img/face.jpg',
  title: 'PhD Student',
  url: 'https://www.iplab.cs.tsukuba.ac.jp/~kihara/'
},
{
  id: 'aditya-gunturu',
  name: 'Aditya Gunturu',
  photo: 'https://adigunturu.com/img/ProfilePic2.png',
  title: 'Master Student',
  url: 'https://adigunturu.com/'
},
{
  id: 'nandi-zhang',
  name: 'Nandi Zhang',
  photo: 'https://media.licdn.com/dms/image/v2/D5603AQHKSlVa4_fMrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711348357683?e=1730332800&v=beta&t=wT6rhelX8Ny5H53a0BD5PbprNFowHb8HRBj7GoIy8e8',
  title: 'Master Student',
  url: 'https://scholar.google.ca/citations?user=zvPQR94AAAAJ&hl=en'
}
]

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
    let type = student.type
    if (type === 'alumni') {
      type = student.past
    }
    switch (type) {
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
    }
    return student
  }

  renderStudent(student) {
    student = this.getTitle(student)
    return (
      <a className="card" href={ student.url } target="_blank">
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
        <div className="ui ten cards">
          { current.filter(student => student).map((student) => {
            return this.renderStudent(student)
          })}
        </div>
        <h3>Alumni</h3>
        <div className="ui ten cards">
          { students.filter(student => student).map((student) => {
            return this.renderStudent(student)
          })}
        </div>
      </div>
    )
  }
}

export default Students
