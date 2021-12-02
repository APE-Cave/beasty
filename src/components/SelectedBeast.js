import React, { Component } from 'react'
import heart from './img/heart.png';
export default class SelectedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // display: false,
    }
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
  // pass renderSelected from app to main, to HornedBeast
  // when clickHandler runs in HornedBeast, invoke renderSelected with that HornedBeast's info (from this.props)
  // renderSelected should switch on visibility of Modal and update beast data values via changing App.state