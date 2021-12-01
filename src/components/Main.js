import React, { Component } from "react";
import HornedBeast from './HornedBeast.js';
import data from '../data.json';

export default class Main extends Component {
  render() {
    return (
      <div>
        {
          data.map(beast => {
            return (<HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />);
          })
        }
      </div>
    );
  }
}

// export default class Main extends Component {
//   render() {
//     {
//       data.map(beast => {
//         return (
//           <div>
//             <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
//           </div>
//         );
//       })
//     }
//   }