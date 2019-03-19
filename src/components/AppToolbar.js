import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from "@material-ui/icons/ToggleOn"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"

const styles = theme => ({
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uppercase: {
    textTransform: "uppercase",
  }
})

const AppToolbar = ({handleBackClick, handleQuitClick, classes}) =>
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="default">
          <KeyboardArrowLeft/>
        </IconButton>
        <Typography className={classes.uppercase} variant="h6" color="textPrimary">
          Stations
        </Typography>
        <IconButton color="default">
          <MoreIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>;

AppToolbar.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
  handleQuitClick: PropTypes.func.isRequired,
};

AppToolbar.defaultProps = {
  handleBackClick: () => {},
  handleQuitClick: () => {},
};

export default withStyles(styles)(AppToolbar)