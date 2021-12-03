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
      horns: 'all',
    }
  }
  
  selectHornsNumber = (horns) => {
    this.setState({horns: horns})
  }

  renderSelected = (beast) => {
    this.setState({ showModal: true, chosenBeast: beast });
  }

  closeModal = () => this.setState({showModal: false});
  
  render() {
    return (
      <div>
        <h2>Selected Horns: {this.state.horns}</h2>
        <Header selectHornsNumber={this.selectHornsNumber}/> {/* pass filtering method to header*/}
        <Main data={data} horns={this.state.horns} renderSelected={this.renderSelected} />
        <SelectedBeast beast={this.state.chosenBeast} show={this.state.showModal} closeModal={this.closeModal}/>
        <Footer />
      </div>
    )
  }
}
