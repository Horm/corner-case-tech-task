import React from "react";
import PropTypes from 'prop-types';

const BottomBar = ({currentlyPlayingStation}) =>
    <div>
      <h3>Currently Playing</h3>
      <p>{currentlyPlayingStation}</p>
    </div>;

BottomBar.propTypes = {
  currentlyPlayingStation: PropTypes.string.isRequired
};

BottomBar.defaultProps = {
  currentlyPlayingStation: "Dribbble FM"
};

export default BottomBar