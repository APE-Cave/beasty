import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {x
  //     horns: this.props.horns, // probably doesn't need to be pushed into state
  //   }
  // }
  // this.props.data.map((beast) => {
  //   // apply logic to map only beast elements with X number of horns
  //   if (beast.horns === horns) return (<HornedBeast beast={beast} renderSelected={this.props.renderSelected}/>);
  // })

  selBeastData = this.props.data.filter(beast => {
    let bh = beast.horns;
    let sh = this.props.horns; // user-selected # of horns
    console.log(this.props.horns);
    if (sh === 'all' || parseInt(sh) === bh) return true; //if user selected 'all' or if num selected matches this beast's horns
    if (parseInt(sh) === 4 && bh > 3) return true; //if user selected "four or more", and this beast matches
    return false;
  });
  
   
  render() {
    return (
      <Container>
        <Row xs={2} sm={2} md={3} lg={5} xl={5}>
          {this.props.data && this.props.horns &&
            this.selBeastData.map((beast, idx) => (<HornedBeast key={beast.title + idx} beast={beast} renderSelected={this.props.renderSelected} />))
          }
        </Row>
      </Container>
    );
  }
}