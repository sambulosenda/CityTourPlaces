import React, { Component } from 'react';
import Tourlist from './components/TourList'
import Navbar from "./components/Navbar/Navbar";
import './App.scss';


class App extends Component {
  render() {
    return  (
    <main>
    <Navbar />
    <Tourlist />
    </main>
    )
  }
}

export default App;
