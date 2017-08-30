import React from 'react';
import fetchData from '../config/api';

import EthChart from './EthChart/EthChart';
import Statistics from './Statistics/Statistics';

function Eth({ ethData, error, loading, category }) {
  return ethData.length === 0
    ? null
    : <div className="container">
        <Statistics ethData={ethData} category={category} />
        <EthChart ethData={ethData} category={category} />
      </div>;
}

export default Eth;
