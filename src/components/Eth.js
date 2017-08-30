import React from 'react';
import PropTypes from 'prop-types';
import fetchData from '../config/api';

import EthChart from './EthChart/EthChart';

function Eth({ ethData, error, loading, category, currentETHWorth }) {
  if (loading) {
    // if loading is true, display loading spinner
    return (
      <div className="loading-box">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    // if error is present, display error message to client
    return (
      <h1 className="error-message">
        {
          'Looks like there was trouble fetching the data. Please try again later.'
        }
      </h1>
    );
  }

  if (ethData.length > 0) {
    // if ethData array has items, pass data array to EthChart component and display chart
    return (
      <div className="container">
        <EthChart
          ethData={ethData}
          category={category}
          currentETHWorth={currentETHWorth}
        />
      </div>
    );
  }

  return null;
}

Eth.propTypes = {
  ethData: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  currentETHWorth: PropTypes.object.isRequired
};

export default Eth;
