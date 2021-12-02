import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';


export default class Main extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map(beast => {
            return (<HornedBeast beast={beast} renderSelected={this.props.renderSelected}/>);
          })
        }
      </div>
    );
  }
}