import React, { Component } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from "react-bootstrap/DropdownButton";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class HornPicker extends Component {

  handleSelection = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.props.selectHornsNumber(event.target.value);
  }

  render() {
    return (
<>
      {/* <DropdownButton onSelect={this.handleSelection} variant="success" id="dropdown-basic-button" title='How horny do you want your beasts?'>
        <Dropdown.Item eventKey='1'>One horn</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Two horns</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Three horns</Dropdown.Item>
        <Dropdown.Item eventKey='4'>Four or more horns!</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='all'>ALL the horny beasts</Dropdown.Item>
      </DropdownButton> */}

<FloatingLabel onChange={this.handleSelection} controlId="floatingSelect" label='How horny do you want your beasts?'>
  <Form.Select aria-label="Floating label select example">
    <option># of horns</option>
    <option value="1">One horn</option>
    <option value="2">Two horns</option>
    <option value="3">Three horns</option>
    <option value="4">Four or more horns!</option>
    <option value="all">ALL the horny beasts</option>
  </Form.Select>
</FloatingLabel>
</>
    )
  }
}
