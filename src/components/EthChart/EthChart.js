import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { today, week, month, year } from '../../config/categories';
import './ethChart.css';

import Statistics from '../Statistics/Statistics';

// Chart configurations from chart.js library
Chart.defaults.global.defaultFontColor = '#FFF';
const grid = {
  display: true,
  gridLines: {
    display: true,
    color: '#FFF'
  }
};

// Additional chart configuration
function configureChart(arr = []) {
  return {
    // display time in x axis
    labels: arr.map(dataObj => convertDate(dataObj.time)),
    datasets: [
      {
        label: 'ETH/USD',
        // display USD in y axis
        data: arr.map(dataObj => dataObj.usd),
        backgroundColor: 'rgba(25, 229, 173, 0.5)'
      }
    ]
  };
}

// Convert time to display as chart labels.(format: 8/29/2017 10:50)
function convertDate(time) {
  var date = new Date(time);
  var hour = date.getHours();
  var minutes = date.getMinutes();
  return `${date.getMonth() +
    1}/${date.getDate()}/${date.getFullYear()} ${hour}:${minutes}`;
}

// Return new array of data with different length depending on current category.
function sliceArray(arr, category) {
  var slicedArr;
  var arrayToDisplay;
  switch (category) {
    case today:
      // Show currency within last 24 hours
      return arr.slice().reverse().slice(0, 24).reverse();

    case week:
      slicedArr = arr.slice().reverse().slice(0, 168); // 168 hours in 1 week
      var arrayToDisplay = [];

      // Show highest currency from each day of the week
      for (let i = 0; i < slicedArr.length; i += 24) {
        arrayToDisplay.push(slicedArr[i]);
      }
      return arrayToDisplay.reverse();

    case month:
      var slicedArr = arr.slice().reverse().slice(0, 730); // 730 hours in 1 month
      var arrayToDisplay = [];

      // Show highest currency from each day in a month
      for (let i = 0; i < slicedArr.length; i += 24) {
        arrayToDisplay.push(slicedArr[i]);
      }
      return arrayToDisplay.reverse();

    case year:
      var slicedArr = arr.slice().reverse().slice(0, 8760); // 8760 hours in 1 year
      var arrayToDisplay = [];

      // Show highest currency from each month in a year
      for (let i = 0; i < slicedArr.length; i += 730) {
        arrayToDisplay.push(slicedArr[i]);
      }
      return arrayToDisplay.reverse();

    default:
      return arr.slice().reverse().slice(0, 24).reverse();
  }
}

// EthChart Component
function EthChart({ ethData, category, currentETHWorth }) {
  const modifiedData = sliceArray(ethData, category);

  return (
    <div className="chart-box">
      <Statistics
        modifiedData={modifiedData}
        category={category}
        currentETHWorth={currentETHWorth}
      />
      <p className="eth-usd">
        {'ETH/USD'}
      </p>
      <Line
        data={configureChart(modifiedData)} // display configurations
        options={{
          // display configurations
          scales: {
            yAxes: [grid]
          },
          maintainAspectRatio: false,
          legend: { position: 'bottom' }
        }}
      />
    </div>
  );
}

EthChart.propTypes = {
  ethData: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  currentETHWorth: PropTypes.object.isRequired
};

export default EthChart;
