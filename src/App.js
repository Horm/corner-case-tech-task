import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from "./components/Toolbar";
import Stations from "./components/Stations";
import BottomBar from "./components/BottomBar";

class App extends Component {
  state = {
    stations: [
      {id: "putin_fm", name: "Putin FM", frequency: "66,6"}
    ],
    currentlyPlayingStation: "putin_fm"
  }

  render() {

    // TODO - Test and error checking
    const getPlayingStationName = () => this.state.stations[this.state.stations.map(station => station.id).indexOf(this.state.currentlyPlayingStation)].name;

    return (
      <div className="App">
        <Toolbar/>
        <Stations/>
        <BottomBar currentlyPlayingStation={getPlayingStationName()}/>
      </div>
    );
  }
}

export default App;
