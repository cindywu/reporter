import ReportList from './ReportList'
import '../css/app.css'

function App() {
  return <ReportList reports={pgReports}/>
}

// const sampleReports = [
//   {
//     id: 1,
//     name: 'Thermal stability and kinetic constants for 129 variants of a family 1 glycoside hydrolase reveal that enzyme activity and stability can be separately designed',
//     author: 'Kleppmann et al.',
//     publishedYear: 2020,
//     publisher: 'ACM',
//     user: '@cindy',
//     createdAt: 'Mar 31'
//   },
//   {
//     id: 2,
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
    id: 1,
    name: 'What I worked on',
    author: 'Graham',
    publishedYear: 2021,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Feb 17',
    comments: [
      {
        id: 1,
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
    id: 2,
    name: 'How to think for yourself',
    author: 'Graham',
    publishedYear: 2021,
    publisher: 'paulgraham.com',
    user: '@cindy',
    createdAt: 'Feb 4',
    comments: [],
  },
  {
    id: 3,
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
