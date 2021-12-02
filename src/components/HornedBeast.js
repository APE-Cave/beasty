import React, { Component } from "react";
import heart from './img/heart.png';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    }
  }

  clickHandler = () => {
    this.setState({ clickCount: this.state.clickCount + 1, });
    console.log(this.state.clickCount);
    this.props.renderSelected(this.props.beast); // DONE pass this beast info back to app here
  }

  // DONE pass entire beast object through main to this cmpnt
  render() {
    return (
      <div>
        <h2>{this.props.beast.title}</h2>
        <img src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} onClick={this.clickHandler} />
        <p>
          <img src={heart} alt='heart icon' />
          Likes: {this.state.clickCount}
        </p>
        <p>{this.props.beast.description}</p>
      </div>
    )
  }
}