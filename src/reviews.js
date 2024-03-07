import React, { useState } from 'react';
import Review from './review';
import ReviewForm from './reviewForm';

export default class Reveiws extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }
  render () {
    const [reviews, setReviews] = useState(this.state.reviews);

    function handleAddReview(name, stars, content) {
      setReviews([
        ...reviews,
        {
          name: name,
          stars: stars,
          content: content,
        },
      ]);
    }

    // let reviews;
    if (this.state.reviews) {
      reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
    }
    return (
      <div className="reviews">
        <div className='reviewForm'>
          <ReviewForm onAddReview={handleAddReview} />
        </div>
        {reviews}
      </div>
    )
  }
}