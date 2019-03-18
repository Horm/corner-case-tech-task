import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
})
const Station = ({station, isSelected, handleStationClick, handlePlusClick, handleMinusClick, classes}) => {

    return <ExpansionPanel expanded={isSelected} >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={() => {handleStationClick(station.id)}}>
        <Typography className={classes.heading}>{station.name}</Typography>
        <Typography className={classes.secondaryHeading}>{station.frequency}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <IconButton>
          <RemoveCircleOutline/>
        </IconButton>
        <Avatar alt={station.nackCount} src={station.icon} className={classes.avatar} />
        <IconButton>
          <AddCircleOutline/>
        </IconButton>

      </ExpansionPanelDetails>
    </ExpansionPanel>


};

Station.propTypes = {
  station: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleStationClick: PropTypes.func.isRequired,
  handlePlusClick: PropTypes.func.isRequired,
  handleMinusClick: PropTypes.func.isRequired,
};

Station.defaultProps = {
  station: {id: "", name: "", frequency: ""},
  isSelected: false,
  handleStationClick: () => {
  },
  handlePlusClick: () => {
  },
  handleMinusClick: () => {
  },
};

export default withStyles(styles)(Station)