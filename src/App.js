import './App.css'
// import Nav from './Nav'
import Movies from './movies'
import {movieList} from './movieList.js'

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <div className="content">
      <h2>Movies:</h2>
        <Movies movies={movieList} />
      </div>
    </div>
  )
}

export default App