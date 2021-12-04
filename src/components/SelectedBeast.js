import React, { Component } from 'react';
// import heart from './img/heart.png'; // TODO use or remove
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {

  closeModal = () => this.props.closeModal();

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "18rem" }}> {/* WTF, mate?!? */}
              <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} />
              <Card.Text>
                {this.props.beast.description}
              </Card.Text>
            </Card></Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

  // pass renderSelected from app to main, to HornedBeast
  // when clickHandler runs in HornedBeast, invoke renderSelected with that HornedBeast's info (from this.props)
  // renderSelected should switch on visibility of Modal and update beast data values via changing App.state
  //