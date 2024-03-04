import './App.css'
// import Nav from './Nav'
import Movie from './movie'
import {movies} from './movies.js'

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <div className="content">
      <h2>Movies:</h2>
        <Movie allMovies={movies}/>
      </div>
    </div>
  )
}

export default App