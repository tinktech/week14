import { useState } from "react";
import ReviewForm from "./reviewForm.js";
import Review from "./review.js";

const initialReviews = [
  { name: "Tori", stars: "5", content: "awesome" },
  { name: "Trin", stars: "4", content: "fantastic" },
  { name: "Brink", stars: "3", content: "beeeeee" },
];

export default function TaskApp() {
  const [reviews, setReviews] = useState(initialReviews);

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

  return (
    <>
      <ReviewForm onAddReview={handleAddReview} />
      <Review reviews={reviews} />
    </>
  );
}
