import React, { Component } from "react";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      chosenBeast: {},
    }
  }

  renderSelected = (beast) => {
    this.setState({ showModal: !this.state.showModal, chosenBeast: beast });
    // DONE change beast here
    if (this.state.showModal) {
       (<SelectedBeast beast={this.state.beast} show={this.state.showModal} />);
    }
  }

  

  render() {
    return (
      <div>
        <Header />
        <Main data={data} renderSelected={App.renderSelected} />
        {
        }
        <Footer />
      </div>
    )
  }
}

// EXAMPLE BEAST FORMAT
// {
//   "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//   "title": "UniWhal",
//   "description": "A unicorn and a narwhal nuzzling their horns",
//   "keyword": "narwhal",
//   "horns": 1
// },