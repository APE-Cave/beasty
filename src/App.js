import React, {Component} from "react";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main data={data}/> 
        <SelectedBeast/>
        <Footer />
      </div>
    )
  }
}
