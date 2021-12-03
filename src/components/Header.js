import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class Header extends Component {
  render() {
    return (
<Navbar bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">
        {' '}
      Horned Beasties
      </Navbar.Brand>
    </Container>
  </Navbar>

    )
  }
}