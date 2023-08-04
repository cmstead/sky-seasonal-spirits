import './App.css'
import SeasonList from './components/SeasonList'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Traveling Spirit Checklist</h1>
      </header>
      <div className="body">
        <SeasonList></SeasonList>
      </div>
    </div>
  )
}

export default App
