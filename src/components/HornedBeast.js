import React, {Component} from "react";

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount:  0,
    }
  }
  
  clickHandler = () => {
    this.setState({clickCount: this.state.clickCount + 1,});
    console.log(this.state.clickCount);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.clickHandler}/>
        <p>{this.props.description}</p>
      </div>
    )
  }
}