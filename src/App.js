import React, {Component} from 'react';
import './App.css';
import AppToolbar from "./components/AppToolbar";
import Stations from "./components/Stations";
import BottomBar from "./components/BottomBar";
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  root: {
    display: 'flex',
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: orange,
    type: 'dark',
  },
});

class App extends Component {
  state = {
    stations: [
      {
        id: "putin_fm",
        name: "Putin FM",
        frequency: "66,6",
        icon: "https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg"
      },
      {
        id: "dribbble_fm",
        name: "Dribbble FM",
        frequency: "101,2",
        icon: "https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg"
      },
      {
        id: "doge_fm",
        name: "Doge FM",
        frequency: "99,4",
        icon: "https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg"
      },
    ],
    selectedStation: "putin_fm"
  }

  handleStationClick = (stationId) => {
    this.setState({selectedStation: stationId})
  };

  render() {

    const {classes} = this.props;

    // TODO - Test and error checking
    const getPlayingStationName = () => {
      let stationIndex = this.state.stations.map(station => station.id).indexOf(this.state.selectedStation);

      if (stationIndex === -1) {
        return "";
      }

      return this.state.stations[stationIndex].name;
    };

    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
        <div className={classes.root}>
          <AppToolbar/>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Stations
                stations={this.state.stations}
                handleStationClick={this.handleStationClick}
                selectedStation={this.state.selectedStation}
            />
            <BottomBar selectedStation={getPlayingStationName()}/>
          </main>

        </div>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
