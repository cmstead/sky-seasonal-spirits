import './App.css'
import MarkdownList from './components/MarkdownList'
import SeasonList from './components/SeasonList'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Traveling Spirit Checklist</h1>
      </header>
      <body>
        <SeasonList></SeasonList>
      </body>
    </div>
  )
}

export default App
