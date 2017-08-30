import React from 'react';
import fetchData from '../config/api';

import EthChart from './EthChart';
import Nav from './Nav/Nav';

function Eth({ ethData, error, loading, category }) {
  return ethData.length === 0
    ? null
    : <div>
        <EthChart ethData={ethData} category={category} />
      </div>;
}

export default Eth;
