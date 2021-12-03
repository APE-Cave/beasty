import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Row xs={2} sm={2} md={3} lg={5} xl={5}>
        {
          this.props.data.map(beast => {
            return (<HornedBeast beast={beast} renderSelected={this.props.renderSelected}/>);
          })
        }
        </Row>
      </Container>
    );
  }
}