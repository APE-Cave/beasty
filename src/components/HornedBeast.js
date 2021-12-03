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

  likeHandler = () => this.setState({ clickCount: this.state.clickCount + 1 });
  showModal = () => this.props.renderSelected(this.props.beast, this.state.clickCount); // DONE pass this beast info back to app here

  // DONE pass entire beast object through main to this cmpnt
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} onClick={this.showModal} />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>
            {this.props.beast.description}
          </Card.Text>
          <div>
            Likes: 
            <img src={heart} style={{ maxHeight: '1.4em', margin: '.2rem'}} alt='heart icon'/>
            {this.state.clickCount}
          </div>
          <Button onClick={this.likeHandler} variant="primary">Like Me!</Button>
        </Card.Body>
      </Card>



      // <div>
      //   <h2>{this.props.beast.title}</h2>
      //   <img src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} onClick={this.likeHandler} />
      //   <p>
      //     <img src={heart} alt='heart icon' />
      //     Likes: {this.state.clickCount}
      //   </p>
      //   <p>{this.props.beast.description}</p>
      // </div>
    )
  }
}