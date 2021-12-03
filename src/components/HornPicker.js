import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

export default class HornPicker extends Component {

  handleSelection = (eventKey) => {
    this.props.selectHornsNumber(eventKey);
  }

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          How horny do you want your beasts?
        </Dropdown.Toggle>

        <Dropdown.Menu onSelect={this.handleSelection}>
          <Dropdown.Item eventKey='all'>ALL the horny beasts</Dropdown.Item>
          <Dropdown.Item eventKey='1'>One horn</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Two horns</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Three horns</Dropdown.Item>
          <Dropdown.Item eventKey='4'>Four or more horns!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
