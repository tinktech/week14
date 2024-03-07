import { useState } from "react";

export default function Review({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.name}>
          <Task review={review} />
        </li>
      ))}
    </ul>
  );
}

function Task({ review }) {
  let reviewList;

  reviewList = (
    <>
      {review.name} - {review.stars} - {review.content}
    </>
  );
  return <label>{reviewList}</label>;
}
