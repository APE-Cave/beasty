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
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.clickHandler} />
        <p>
          <img src={heart} alt='heart icon' />
          Likes: {this.state.clickCount}
        </p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}