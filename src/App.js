import React, {Component} from 'react';
import './App.css';
import AppToolbar from "./components/AppToolbar";
import Stations from "./components/Stations";
import BottomBar from "./components/BottomBar";
import orange from '@material-ui/core/colors/orange';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core/styles';
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
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

const RADIO_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Iglesia_Nova_Gracanica%2C_Trebinje%2C_Bosnia_y_Herzegovina%2C_2014-04-14%2C_DD_14-16_HDR.jpg/1920px-Iglesia_Nova_Gracanica%2C_Trebinje%2C_Bosnia_y_Herzegovina%2C_2014-04-14%2C_DD_14-16_HDR.jpg";

class App extends Component {
  state = {
    stations: [
      {
        id: "putin_fm",
        name: "Putin FM",
        frequency: "66,6",
        icon: RADIO_ICON
      },
      {
        id: "dribbble_fm",
        name: "Dribbble FM",
        frequency: "101,2",
        icon: RADIO_ICON
      },
      {
        id: "doge_fm",
        name: "Doge FM",
        frequency: "99,4",
        icon: RADIO_ICON
      },
    ],
    selectedStation: "putin_fm"
  }

  handleStationClick = (stationId) => {
    if (stationId === this.state.selectedStation) {
      this.setState({selectedStation: ""})
    }
    else {
      this.setState({selectedStation: stationId})

    }
  };

  render() {

    const {classes} = this.props;

    const getPlayingStationName = () => {
      let stationIds = this.state.stations.map(station => station.id);
      let stationIndex = stationIds.indexOf(this.state.selectedStation);

      if (stationIndex === -1) {
        return "";
      }

      return this.state.stations[stationIndex].name;
    };

    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <div className={classes.root}>
            <AppToolbar/>
            <main className={classes.content}>
              <div className={classes.toolbar}/>
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
