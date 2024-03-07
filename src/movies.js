import React from 'react';
import Movie from './movie';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies
    }
  }
  render () {
    let movies;
    if (this.state.movies) {
      movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie}/>);
    }
    return (
      <div className="movies">
        {movies}
      </div>
    )
  }
}