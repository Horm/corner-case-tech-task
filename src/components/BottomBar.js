import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from "@material-ui/icons/MoreVert"

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    textAlign: "center"
  },
  uppercase: {
    textTransform: "uppercase",
  }
});

const BottomBar = ({selectedStation, classes}) => <AppBar position="fixed" color="inherit" className={classes.appBar}>
  <Toolbar className={classes.toolbar}>
    <div></div>
    <div className={classes.center}>
      <Typography className={classes.uppercase} variant="h7" color="primary">
        Currently playing
      </Typography>
      <Typography variant="body1" color="white">
        {selectedStation}
      </Typography>
    </div>
    <div></div>
  </Toolbar>
</AppBar>;

BottomBar.propTypes = {
  selectedStation: PropTypes.string.isRequired
};

BottomBar.defaultProps = {
  selectedStation: ""
};

export default withStyles(styles)(BottomBar)