import ReportList from './ReportList'

function App() {
  return <ReportList reports={sampleReports}/>
}

const sampleReports = [
  {
    id: 1,
    name: 'Thermal stability and kinetic constants for 129 variants of a family 1 glycoside hydrolase reveal that enzyme activity and stability can be separately designed',
    author: 'Kleppmann + 1',
    publishedYear: 2020,
    publisher: 'ACM',
    user: '@cindy',
    createdAt: 'Mar 31'
  },
  {
    id: 2,
    name: 'Computational protein design - the next generation tool to expand synthetic biology applications',
    author: 'Gainza-Cirauqui + 1',
    publishedYear: 2018,
    publisher: 'Current Opinion in Biotechnology',
    user: '@cindy',
    createdAt: 'Mar 27'
  }
]

export default App;
