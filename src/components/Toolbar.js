import React from "react";
import PropTypes from 'prop-types';

const Toolbar = ({handleBackClick, handleQuitClick}) =>
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>Stations</h1>
      <button onClick={handleQuitClick}>Quit</button>
    </div>;

Toolbar.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
  handleQuitClick: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  handleBackClick: () => {},
  handleQuitClick: () => {},
};

export default Toolbar