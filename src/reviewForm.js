import React from 'react';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stars: "",
      content: "",
      onAddReview: props.onAddReview
    }
  }

render() {
  return (
    <div>
      <div>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        <select value={this.state.stars} onChange={(e) => this.setState({stars: e.target.value})}>
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
          value={this.state.content}
          onChange={(e) => this.setState({content: e.target.value})}
        />
        <button onClick={() => {
            this.state.onAddReview(this.state.name, this.state.stars, this.state.content);
        }}>
          Submit
        </button>
      </div>
    </div>
  );
}
}