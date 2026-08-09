import React from 'react'
import students from '../content/output/students.json'

const currentStudents = [
  {
    id: 'xiaoan-liu',
    name: 'Xiaoan (Sean) Liu',
    photo: '/static/students/xiaoan-liu.jpg',
    title: 'PhD Student',
    url: 'https://seanliu.io/'
  },
  {
    id: 'hye-young-jo',
    name: 'Hye-Young Jo',
    photo: '/static/students/hye-young-jo.jpg',
    title: 'PhD Student',
    url: 'https://www.hyeyoungjo.com/'
  },
  {
    id: 'keiichi-ihara',
    name: 'Keiichi Ihara',
    photo: '/static/students/keiichi-ihara.jpg',
    title: 'PhD Student',
    url: 'https://keiichiihara.github.io/'
  },
  {
    id: 'ada-zhao',
    name: 'Ada Yi Zhao',
    photo: '/static/students/ada-zhao.jpg',
    title: 'PhD Student',
    url: 'https://adazhao.info/'
  },
  {
    id: 'ziru-wei',
    name: 'Ziru Wei',
    photo: '/static/students/ziru-wei.jpg',
    title: 'Incoming PhD Student (Fall 2026)',
    url: 'https://interactive-structures.org/team.html'
  },
  {
    id: 'zhuo-wang',
    name: 'Zhuo Wang',
    photo: '/static/students/zhuo-wang.jpg',
    title: 'Visiting Short-Term Scholar (Summer 2026)',
    now: "Xi'an Jiaotong-Liverpool University",
    url: 'https://zhuowang.academic.ws/'
  }
]

const recentPastStudents = [
  {
    id: 'chungha-lee',
    name: 'ChungHa Lee',
    photo: '/static/students/chungha-lee.jpg',
    title: 'Former Visiting PhD Student (Summer 2026)',
    now: 'GIST',
    url: 'https://github.com/ChungHaLee'
  },
  {
    id: 'daeho-lee',
    name: 'DaeHo Lee',
    photo: '/static/students/daeho-lee.jpg',
    title: 'Former Visiting PhD Student / Collaborator',
    now: 'GIST',
    url: 'https://lee-daeho.github.io/'
  },
  {
    id: 'aditya-gunturu',
    name: 'Aditya Gunturu',
    photo: '/static/students/aditya-gunturu.jpg',
    title: 'Former MSc Student',
    now: 'University of Washington CS PhD',
    url: 'https://adigunturu.github.io/'
  },
  {
    id: 'nandi-zhang',
    name: 'Nandi Zhang',
    photo: '/static/students/nandi-zhang.jpg',
    title: 'Former MSc Student',
    now: 'University of Rochester CS PhD',
    url: 'https://cs.rochester.edu/u/nzhang28/'
  }
]

const featuredIds = new Set([
  ...currentStudents,
  ...recentPastStudents
].map(student => student.id))

const alumni = students
  .filter(student => !featuredIds.has(student.id))
  .map(student => ({
    ...student,
    photo: student.id === 'freya-wen'
      ? '/static/students/freya-wen.jpg'
      : (student.photo || `/static/students/${student.id}.jpg`),
    url: student.url || `https://ilab.ucalgary.ca/people/${student.id}`
  }))

class Students extends React.Component {
  getTitle(student, isPast) {
    if (student.title) return student
    let type = student.type === 'alumni' ? student.past : student.type
    const titles = {
      postdoc: 'Postdoc',
      phd: 'PhD',
      master: 'Master',
      undergrad: 'Undergrad',
      intern: 'Intern',
      visiting: 'Visiting'
    }
    const title = titles[type] || type
    return { ...student, title: isPast ? `Former ${title}` : title }
  }

  renderStudent(student, isPast) {
    student = this.getTitle(student, isPast)
    return (
      <a className="card" href={ student.url } target="_blank" key={student.id}>
        <div className="center aligned">
          <div className="image profile-container">
            <img className="ui rounded profile image" src={ student.photo } alt={ student.name } />
          </div>
          <div className="header">
            { student.name } <br/>
            <span className="meta">{ student.title } <br/></span>
            <span className="meta">{ student.now }</span>
          </div>
        </div>
      </a>
    )
  }

  renderSection(title, people, isPast = false) {
    return (
      <React.Fragment>
        <h3>{ title }</h3>
        <div className="ui ten cards">
          { people.map(student => this.renderStudent(student, isPast)) }
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div id="students">
        <h1>Students</h1>
        { this.renderSection('Current Students & Interns', currentStudents) }
        { this.renderSection('Past Students & Interns', [...recentPastStudents, ...alumni], true) }
      </div>
    )
  }
}

export default Students
