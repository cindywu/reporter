import React, { useState } from 'react';
import ReportList from './ReportList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [reports, setReports] = useState(pgReports)

  function handleReportAdd() {
    const newReport = {
      id: uuidv4(),
      name: 'New',
      author: 'Author',
      publishedYear: 2021,
      publisher: 'Publisher',
      user: '@cindy',
      createdAt: 'Feb 17',
      comments: [
        {
          id: uuidv4(),
          highlightedText: 'highlight',
          commentText: 'comment'
        },
      ]
    }
  
    setReports([...reports, newReport])
  }

  function handleReportDelete(id) {
    setReports(reports.filter(report => report.id !== id))
  }
  return (
    <ReportList 
      reports={reports}
      handleReportAdd={handleReportAdd}
      handleReportDelete={handleReportDelete}
    />
  )

}

// const sampleReports = [
//   {
//     id: uuidv4(),
//     name: 'Thermal stability and kinetic constants for 129 variants of a family 1 glycoside hydrolase reveal that enzyme activity and stability can be separately designed',
//     author: 'Kleppmann et al.',
//     publishedYear: 2020,
//     publisher: 'ACM',
//     user: '@cindy',
//     createdAt: 'Mar 31'
//   },
//   {
//     id: uuidv4(),
//     name: 'Computational protein design - the next generation tool to expand synthetic biology applications',
//     author: 'Gainza-Cirauqui et al.',
//     publishedYear: 2018,
//     publisher: 'Current Opinion in Biotechnology',
//     user: '@cindy',
//     createdAt: 'Mar 27'
//   }
// ]

const pgReports = [
  {
    id: uuidv4(),
    name: 'What I worked on',
    author: 'Graham',
    publishedYear: 2021,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Feb 17',
    comments: [
      {
        id: uuidv4(),
        highlightedText: 'the two main things I worked on',
        commentText: 'the main things i worked on outside of school before college were playing and exploring'
      },
      {
        id: 2,
        highlightedText: "I couldn't figure out what to do with it",
        commentText: "I love tools that don't have a clear usefulness. It doesn't mean they're not useful, but they might be not useful."
      }
    ],
  },
  {
    id: uuidv4(),
    name: 'How to think for yourself',
    author: 'Graham',
    publishedYear: 2021,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Feb 4',
    comments: [],
  },
  {
    id: uuidv4(),
    name: "What you can't say",
    author: 'Graham',
    publishedYear: 2020,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Dec 16',
    comments: [],
  },
]

export default App;
