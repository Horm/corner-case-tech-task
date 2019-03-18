import React from "react";
import PropTypes from 'prop-types';
import Station from "./Station";

const Stations = ({stations, selectedStation, handleStationClick, handlePlusClick, handleMinusClick}) =>
    <div>
      {stations.map((station, index) =>
          <Station
              key={index}
              station={station}
              handleStationClick={handleStationClick}
              handleMinusClick={handleMinusClick}
              handlePlusClick={handlePlusClick}
              isSelected={false}
          />
      )}
    </div>;

Stations.propTypes = {
  stations: PropTypes.array.isRequired,
  selectedStation: PropTypes.string.isRequired,
  handleStationClick: PropTypes.func.isRequired,
  handlePlusClick: PropTypes.func.isRequired,
  handleMinusClick: PropTypes.func.isRequired,
};

Stations.defaultProps = {
  stations: [],
  selectedStation: "",
  handleStationClick: () => {},
  handlePlusClick: () => {},
  handleMinusClick: () => {},
};

export default Stations