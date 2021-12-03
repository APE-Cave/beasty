import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Main extends Component {
  constructor(props) {
    super(props);
    state = {
      horns: this.props.horns,
    }
  }
  // this.props.data.map((beast, this.state.horns) => {
  //   // apply logic to map only beast elements with X number of horns
  //   if (beast.horns === horns) return (<HornedBeast beast={beast} renderSelected={this.props.renderSelected}/>);
  // })
  render() {
    return (
      <Container>
        <Row xs={2} sm={2} md={3} lg={5} xl={5}>
        {
          // data.filter to get correct array of data
          // newDataArr.map to RETURN array of componentst
        }
        </Row>
      </Container>
    );
  }
}