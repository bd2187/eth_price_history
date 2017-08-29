import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import fetchData from '../config/api';

import EthChart from './EthChart';
import Nav from './Nav/Nav';

function Eth({ ethData, error, loading, category }) {
  return ethData.length === 0
    ? null
    : <div>
        <EthChart ethData={ethData} />
      </div>;
}

export default Eth;

/*
  Create a function that changes the category type.
*/
