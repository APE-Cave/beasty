import React, { Component } from "react";
import heart from './img/heart.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    }
  }
  
  // heartStyle = document.getElementById('heart').style;

  likeHandler = () => {
    this.setState({ clickCount: this.state.clickCount + 1, });
    // this.heartBouncer();
    // setTimeout( this.heartStop, 500);
  }
  // heartBouncer = () => {
  //   this.heartStyle.animation = '.1s bounce 0s infinite alternate';
  //   }
  // heartStop = () => {
  //   this.heartStyle.removeProperty('animation');
  // }
  //   click{
  //   this.props.renderSelected(this.props.beast); // DONE pass this beast info back to app here
  // }

  // DONE pass entire beast object through main to this cmpnt
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>
            {this.props.beast.description}
          </Card.Text>
          <div>
            <img id='heart' src={heart} style={{ maxWidth: '10%', margin: '.5rem' }} alt='heart icon' />
            Likes: {this.state.clickCount}
          </div>
          <Button onClick={this.likeHandler} variant="primary">Like Me!</Button>
        </Card.Body>
      </Card>



      // <div>
      //   <h2>{this.props.beast.title}</h2>
      //   <img src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} onClick={this.clickHandler} />
      //   <p>
      //     <img src={heart} alt='heart icon' />
      //     Likes: {this.state.clickCount}
      //   </p>
      //   <p>{this.props.beast.description}</p>
      // </div>
    )
  }
}