import { useState } from "react";

export default function ReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={stars} onChange={(e) => setStars(e.target.value)}>
          <option value="★">★</option>
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </select>
      </div>
      <div>
        <input
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => {
            onAddReview(name, stars, content);
        }}>
          Submit
        </button>
      </div>
    </div>
  );
}
