import React from 'react';

// export default class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       handleSubmit: props.handleSubmit
//     }
//   }
//   render() {

//     return(
//       <form onSubmit={this.state.handleSubmit}>
//         <div>
//         <label>
//           Name: <input type='text' name='name'/>
//         </label>
//         <label>
//           Rating:
//           <select name="stars">
//             <option value="★">★</option>
//             <option value="★★">★★</option>
//             <option value="★★★">★★★</option>
//             <option value="★★★★">★★★★</option>
//             <option value="★★★★★">★★★★★</option>
//           </select>
//         </label>
//         </div>
//         <div>
//         <label>
//           Review: <textarea type='text' name='content' rows={4} cols={40}/>
//         </label>
//         <button type='submit'>Submit</button>
//         </div>
//       </form>

      
//     )
//   }
// }

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