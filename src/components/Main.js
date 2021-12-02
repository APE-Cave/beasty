import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';


export default class Main extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map(beast => {
            return (<HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />);
          })
        }
      </div>
    );
  }
}