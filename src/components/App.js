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
  const [reports, setReports] = useState(protocolLabsReports)
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


// const pgReports = [
//   {
//     id: uuidv4(),
//     title: 'What I worked on',
//     authors: 'Graham',
//     publishedYear: 2021,
//     publisher: 'paulgraham.com',
//     user: '@cindy',
//     createdAt: 'Feb 17',
//     comments: [
//       {
//         id: uuidv4(),
//         highlightedText: 'the two main things I worked on',
//         commentText: 'the main things i worked on outside of school before college were playing and exploring'
//       },
//       {
//         id: uuidv4(),
//         highlightedText: "I couldn't figure out what to do with it",
//         commentText: "I love tools that don't have a clear usefulness. It doesn't mean they're not useful, but they might be not useful."
//       }
//     ],
//   },
//   {
//     id: uuidv4(),
//     title: 'How to think for yourself',
//     authors: 'Graham',
//     publishedYear: 2021,
//     publisher: 'paulgraham.com',
//     user: '@cindy',
//     createdAt: 'Feb 4',
//     comments: [],
//   },
//   {
//     id: uuidv4(),
//     title: "What you can't say",
//     authors: 'Graham',
//     publishedYear: 2020,
//     publisher: 'paulgraham.com',
//     user: '@cindy',
//     createdAt: 'Dec 16',
//     comments: [],
//   },
// ]

const protocolLabsReports = [
  {
    id: "f8fc647c-3bf3-490d-ba09-cbb79c054245",
    title: "A Delay-Tolerant Network Architecture for Challenged Internets",
    authors:"Fall",
    publishedYear:2003,
    publisher: "SIGCOMM '03",
    user:"@cindy",
    createdAt:"Feb 17",
    comments: [
      {
        id:"54dbcac8-dc4d-467e-b580-606bb77025dd",
        highlightedText:"\"extreme environments\"",
        commentText: "What are examples of extreme environments? \n\nDesert? Cave? Space? Underwater?\n\n@cindy"
      },
      {
        id:"c51a0ad9-9a37-4b30-b92d-bdc3d3f74321",
        highlightedText:"\"have their own specialized protocols, and do not utilize IP\"",
        commentText:"Could someone talk about the extent to which this has changed vs not changed over the past 18 years?\n\n@aransil"
      }
    ]
  },
  {
    id: "1fd4abfc-1dfb-4cfc-8457-746251562a57",
    title: "Asynchronous Protocols for Optimistic Fair Exchange",
    authors: "Asokan et al.",
    publishedYear: 2021,
    publisher: "paulgraham.com",
    user: "@cindy",
    createdAt:"Feb 4",
    comments: [
      {
        id:"4d1e7287-6282-41b7-9673-34fe47415074",
        highlightedText:"\"fair exchange protocols\"",
        commentText:"In cryptography, a multi-party fair exchange protocol is a protocol where parties accept to deliver an item if and only if they receive an item in return.\n\n@cindy"
      },
      {
        id:"6e65c5be-86f0-457e-af54-42d33e86a949",
        highlightedText:"\"optimistic fair exchange protocols\"",
        commentText:"how is optimistic fair exchange related to strong fair exchange (https://www.cs.utexas.edu/~shmat/courses/cs395t_fall04/pagnia.pdf)?\n\n@KarolaKrisanow"
      }
    ]
  },
  {
    id:"5b23a0b4-90ec-4202-9ad3-b4ee4590248a",
    title:"Beyond being there",
    authors:"Hollan and Stornetta",
    publishedYear:1992,
    publisher:"CHI '92 by ACM",
    user:"@cindy",
    createdAt:"Dec 16",
    comments: [
      {
        id:"34a28777-40a4-42f9-8402-5c6c24ca15fb",
        highlightedText:"\"Research has clarified and substantiated both these commonsense intuitions.\"",
        commentText:"That's good, right?\n\n@Gavin"
      },
      {
        id:"fd0760db-4ac3-4d7f-a982-98b1f7ca6218",
        highlightedText:"\"the large number of informal interactions necessary to create and maintain working relationships\"",
        commentText:"*working relationships*, or *generative relationships*? I think of face-to-face interactions as specifically fostering co-ownership of creative ideas (like Steve Jobs or Daniel Kahneman's famous habits of taking long walks with collaborators) but not as being required for just working together\n\n@aransil"
      }
    ]
  },
  {
    id:"d8274255-6ac2-4114-9503-46832f63bcff",
    title:"A Public Option for the Core",
    authors:"Harchol et al.",
    publishedYear:2020,
    publisher:"SIGCOMMI '20 by ACM",
    user:"@cindy",
    createdAt:"Aug 23",
    comments: [
      {
        id:"2399c848-6ed8-490b-9c1a-1f002f8b53d8",
        highlightedText:"\"Abstract\"",
        commentText:"GPT-3's summary for a 2nd grader provided by tldrpapers.com:\n\nIn the past, all the big companies who make up the Internet used to work together to help find new ways to build more Internet, but now they are all fighting against each other.\n\n@cindy\n\nKids today... ^_^\n\n@jsoares"
      },
      {
        id:"9b8a848b-6b6f-48d3-b099-3adce8941835",
        highlightedText:"\"the narrow waist of IP\"",
        commentText:"now that I've read some David Clark, I finally get this reference\n\n@Karola Kirsanow"
      }
    ],
  },
  {
    id:"1e13cbb7-26c9-42ef-a1fb-fd226a7f7906",
    title:"Local-First Software: You Own Your Data, in spite of the Cloud",
    authors:"Kleppmann et al.",
    publishedYear:2020,
    publisher:"Onward! '19 by ACM",
    user:"@cindy",
    createdAt:"Jul 31",
    comments: [
      {
        id:"441ab06d-edae-430d-b388-85088db0a8d8",
        highlightedText:"\"Abstract\"",
        commentText:"Abstract summarized for a 2nd grader: \n\nPeople use cloud applications, like Google Docs and Trello, because they are easy to use and you can work on them from different devices. But if the cloud service shuts down, you lose everything. I’m going to tell you about a new type of application that is local. It means that you can use it on one computer, or two computers, or a hundred computers. And you can keep using it even if the Internet stops working. I will tell you about some of the people who worked on this project at a company called Ink and Switch. They worked on software that is like Google Docs but doesn’t use the Internet.\n\n@cindy"
      }
    ],
  },
  {
    id:"d8e56403-86a3-440d-9c28-d4998d28b48a",
    "title":"Blockchain as a confidence machine: The problem of trust & challenges of governance",
    authors:"De Filippi et al.",
    publishedYear:2020,
    publisher:"Technology in Society by Elsevier",
    user:"@cindy",
    createdAt:"Aug 21",
    comments:[
      {
        id:"89f00dcb-cb3b-4794-8864-e232ee66a600",
        highlightedText:"\"Confidence in a blockchain system depends on its underlying governance structure\"",
        commentText:"I don't think anyone who works on blockchain security would actually make this claim\n\n@evan\n\nat least not without scoping it to some specific interactions\n\n@evan"
      },
      {
        id:"a4c1ef53-2e09-40a2-b616-e12543aeef53",
        highlightedText:"\"Conrad Gessner\"",
        commentText:"This is the inventor of Zettelkasten\n\n@KarolaKirsanow"
      }
    ],
  },
  {
    id:"3ccbbcc5-f00a-483e-945c-8d1fbde7446c",
    title:"Internet Backbones in Space",
    authors:"Giuliari et al.",
    publishedYear:2020,
    publisher:"ACM SIGCOMM Computer Communication Review",
    user:"@cindy",
    createdAt:"April 23",
    comments:[
      {
        id:"c4341709-7316-4d31-8dae-4c61ec3527b5",
        highlightedText:"\"companies\"",
        commentText:"what companies?\n\n@cindy\n\nspacex is the notable existing one, amazon / blueorigin is playing catch up\n\n@willscott\n\nmostly spacex. seems like other people are trying, but no one is making lots of progress\n\n@evan\n\nOneWeb is another relevant player here, at least pre-bankruptcy; they seem to have since been acquired by the UK gov.\n\n@jsoares"
      },
      {
        id:"16c46fd5-4228-4702-a927-6eb9049cb523",
        highlightedText:"\"but they also promise much lower latency than terrestrial fiber for long-distance routes\"",
        commentText:"Will they, though? Sure, speed of light in space, and stuff -- it's clear that theoretically, this is possible. But this will still be a mobile network with multiple hops, both in space and on the ground, and the distances will be greater. The FCC already questioned SpaceX's numbers for access network (i.e. local) latency, and I'm not convinced we'll have faster global latencies in the near future.\n\n@jsoares"
      }
    ],
  },
  {
    id:"0a5ece28-aa91-4ff2-bc9b-83d6c1acaa79",
    title:"Enabling a permanent revolution in internet architecture",
    authors:"McCauley et al.",
    publishedYear:2019,
    publisher:"SIGCOMM '19 by ACM",
    user:"@cindy",
    createdAt:"Oct 3",
    comments:[
      {
        id:"3167d6c0-9ec4-4445-8037-e05d66c62bf9",
        highlightedText:"\"then became the dominant attitude\"",
        commentText:"In what year?\n\n@cindy"
      },
      {
        id:"50bfbf47-dab9-42c3-a1a2-3af7f4681dd6",
        highlightedText:"latter property",
        commentText:"multiple of these architectures can exist side-by-side\n\n@cindy"
      }
    ],
  }
]


export default App;
