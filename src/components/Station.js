import React from "react";
import PropTypes from 'prop-types';

const Station = ({station, isSelected, handleStationClick, handlePlusClick, handleMinusClick}) => {
  if (isSelected) {
    return <div>
      <button onClick={handleMinusClick}>Minus</button>
      <img src={station.icon}/>
      <button onClick={handlePlusClick}>Plus</button>
      <h2>{station.name}</h2>
      <h3>{station.frequency}</h3>
    </div>;
  }
  else {
    return <div>
      <button onClick={handleStationClick}>
        <h2>{station.name}</h2><h3>{station.frequency}</h3>
      </button>
    </div>;
  }

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

export default Station