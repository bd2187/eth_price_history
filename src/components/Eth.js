import React from 'react';
import fetchData from '../config/api';

import EthChart from './EthChart/EthChart';

function Eth({ ethData, error, loading, category, currentETHWorth }) {
  return ethData.length === 0
    ? null
    : <div className="container">
        <EthChart
          ethData={ethData}
          category={category}
          currentETHWorth={currentETHWorth}
        />
      </div>;
}

export default Eth;
