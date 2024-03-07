import React from "react";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      stars: props.stars,
      content: props.content
    }
  }
  render() {
    return (
      <div className="review">
        <div className="reviewHead">
          <p>
            {this.state.name}
            <span>{this.state.stars}</span>
          </p>
        </div>
        <div className="reviewContent">
          {this.state.content}
        </div>
      </div>
    )
  }
}