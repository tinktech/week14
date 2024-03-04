import imdbLogo from "./resources/imdb.png"

export default function Movie({allMovies}) {

  let moviesArray = allMovies;
  
  return (
    <div className="movies">
    {moviesArray.map((movie, index) => (
      <div key={index} className="movie">
        <h3>{movie.title}</h3>
        <div className="poster">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            max-width="100%"
          />
        </div>
        <div className="movieDetails">
          <p>{movie.releaseYear} ∙ {movie.rated} ∙ {movie.duration}
          <span><a href={movie.imdb}>
            <img
              src={imdbLogo}
              height="25px"
            />
          </a></span>
          </p>
        </div>
        <p>
          {movie.synopsis}
        </p>

      </div>
    ))}
    </div>
  )
}