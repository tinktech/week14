import React from 'react';
import imdbLogo from "./resources/imdb.png";
import Reviews from './reviews';
// import ReviewForm from './reviewForm';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      poster: props.poster,
      synopsis: props.synopsis,
      releaseYear: props.releaseYear,
      rated: props.rated,
      duration: props.duration,
      imdb: props.imdb,
      reviews: props.reviews
    }
  }


  render() {
    // console.log(this.state.reviews);
    return (
      <div className="movie">
        <div className='movieHead'>
          <h3>{this.state.title}</h3>
        </div>
        <div className='movieBody'>
          <div className='movieInfo'>
            <div className="poster">
              <img
                src={this.state.poster}
                alt={`${this.state.title} poster`}
              />
            </div>
            <div className="movieDetails">
              <p>{this.state.releaseYear} ∙ {this.state.rated} ∙ {this.state.duration}
              <span><a href={this.state.imdb}>
                <img
                  src={imdbLogo}
                  height="25px"
                />
              </a></span>
              </p>
            </div>
            <p>
              {this.state.synopsis}
            </p>
          </div>
          <div className='feedback'>
            <Reviews reviews={this.state.reviews}/>
          </div>
        </div>
      </div>
    )
  }
}