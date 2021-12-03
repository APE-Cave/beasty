import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

export default class HornPicker extends Component {

  handleSelection = (event) => {
    event.preventDefault();
    console.log(`selection ${event.eventKey} triggered`);
    this.props.selectHornsNumber(event.eventKey);
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          How horny do you want your beasts?
        </Dropdown.Toggle>

        <Dropdown.Menu onSelect={()=>this.handleSelection}>
          <Dropdown.Item eventKey='all'>ALL the horny beasts</Dropdown.Item>
          <Dropdown.Item eventKey='1'>One horn</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Two horns</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Three horns</Dropdown.Item>
          <Dropdown.Item eventKey='4' onClick={()=>this.handleSelection}>Four or more horns!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
