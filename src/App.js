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
    this.setState({ showModal: true, chosenBeast: beast });
  }

  closeModal = () => this.setState({showModal: false});
  
  render() {
    return (
      <div>
        <Header />
        <Main data={data} renderSelected={this.renderSelected} />
        <SelectedBeast beast={this.state.chosenBeast} show={this.state.showModal} closeModal={this.closeModal}/>
        <Footer />
      </div>
    )
  }
}
