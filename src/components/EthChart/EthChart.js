import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { today, week, month, year } from '../../config/categories';
import './ethChart.css';

import Statistics from '../Statistics/Statistics';

Chart.defaults.global.defaultFontColor = '#FFF';
const grid = {
  display: true,
  gridLines: {
    display: true,
    color: '#FFF'
  }
};

function convertDate(time) {
  var date = new Date(time);
  var hour = date.getHours();
  var minutes = date.getMinutes();
  return `${date.getMonth() +
    1}/${date.getDate()}/${date.getFullYear()} ${hour}:${minutes}`;
}

class EthChart extends Component {
  configureChart(arr = []) {
    return {
      labels: arr.map(dataObj => convertDate(dataObj.time)),
      datasets: [
        {
          label: 'Price in USD',
          data: arr.map(dataObj => dataObj.usd),
          backgroundColor: 'rgba(25, 229, 173, 0.5)'
        }
      ]
    };
  }
  sliceArray(arr, category) {
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

  render() {
    const { ethData, category, currentETHWorth } = this.props;
    const modifiedData = this.sliceArray(ethData, category);
    console.log(modifiedData);
    return (
      <div className="chart-box">
        <Statistics
          modifiedData={modifiedData}
          category={category}
          currentETHWorth={currentETHWorth}
        />
        <Line
          data={this.configureChart(modifiedData)}
          options={{
            scales: {
              yAxes: [grid]
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default EthChart;
