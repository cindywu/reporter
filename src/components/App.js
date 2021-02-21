import React, { useState, useEffect, createContext } from 'react';
import ReportList from './ReportList'
import ReportEdit from './ReportEdit'
import SearchBar from './SearchBar'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'

export const ReportContext = createContext()
const LOCAL_STORAGE_KEY = 'reporter.reports'

function App() {
  const [selectedReportId, setSelectedReportId] = useState()
  const [reports, setReports] = useState(pgReports)
  const selectedReport = reports.find(report => report.id === selectedReportId)

  useEffect(() => {
    const reportJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (reportJSON != null) setReports(JSON.parse(reportJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reports))
  }, [reports])

  const reportContextValue = {
    handleReportAdd,
    handleReportDelete,
    handleReportSelect,
    handleReportChange
  }

  function handleReportSelect(id) {
    setSelectedReportId(id)
  }

  function handleReportAdd() {
    const newReport = {
      id: uuidv4(),
      name: '',
      authors: '',
      publishedYear: 2020,
      publisher: '',
      user: '',
      createdAt: '',
      comments: [
        {
          id: uuidv4(),
          highlightedText: '',
          commentText: ''
        },
      ]
    }
  
    setSelectedReportId(newReport.id)
    setReports([...reports, newReport])
  }

  function handleReportChange(id, report) {
    const newReports = [...reports]
    const index = newReports.findIndex(r => r.id === id)
    newReports[index] = report
    setReports(newReports)
  }

  function handleReportDelete(id) {
    if (selectedReportId != null && selectedReportId === id) {
      setSelectedReportId(undefined)
    }
    setReports(reports.filter(report => report.id !== id))
  }

  return (
    <ReportContext.Provider value={reportContextValue}>
      <SearchBar />
      <ReportList reports={reports} />
      { selectedReport && <ReportEdit report={selectedReport} />}
    </ReportContext.Provider>
  )

}

// const sampleReports = [
//   {
//     id: uuidv4(),
//     title: 'Thermal stability and kinetic constants for 129 variants of a family 1 glycoside hydrolase reveal that enzyme activity and stability can be separately designed',
//     authors: 'Kleppmann et al.',
//     publishedYear: 2020,
//     publisher: 'ACM',
//     user: '@cindy',
//     createdAt: 'Mar 31'
//   },
//   {
//     id: uuidv4(),
//     title: 'Computational protein design - the next generation tool to expand synthetic biology applications',
//     authors: 'Gainza-Cirauqui et al.',
//     publishedYear: 2018,
//     publisher: 'Current Opinion in Biotechnology',
//     user: '@cindy',
//     createdAt: 'Mar 27'
//   }
// ]

const pgReports = [
  {
    id: uuidv4(),
    title: 'What I worked on',
    authors: 'Graham',
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
        id: uuidv4(),
        highlightedText: "I couldn't figure out what to do with it",
        commentText: "I love tools that don't have a clear usefulness. It doesn't mean they're not useful, but they might be not useful."
      }
    ],
  },
  {
    id: uuidv4(),
    title: 'How to think for yourself',
    authors: 'Graham',
    publishedYear: 2021,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Feb 4',
    comments: [],
  },
  {
    id: uuidv4(),
    title: "What you can't say",
    authors: 'Graham',
    publishedYear: 2020,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Dec 16',
    comments: [],
  },
]

export default App;
