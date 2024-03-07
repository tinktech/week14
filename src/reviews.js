import React, {useState} from 'react';
import Review from './review';
import ReviewForm from './reviewForm';

export default class Reveiws extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }

  addReview(name, stars, content) {
    this.setState(({reviews}) => ({
      reviews: [
        ...reviews,
        {
          name: name,
          stars: stars,
          content: content
        }
      ]
    }));
  }

  render () {
    let reviews;
    if (this.state.reviews) {
      reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
    }
    return (
      <div className="reviews">
        <div className='reviewForm'>
          <ReviewForm onAddReview={this.addReview.bind(this)} />
        </div>
        {reviews}
      </div>
    )
  }
}