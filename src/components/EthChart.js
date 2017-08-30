import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { today, week, month, year } from '../config/categories';

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
          label: '',
          data: arr.map(dataObj => dataObj.usd),
          backgroundColor: 'green'
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
    const modifiedData = this.sliceArray(
      this.props.ethData,
      this.props.category
    );
    console.log(this.props);
    return (
      <div>
        <Line data={this.configureChart(modifiedData)} />
      </div>
    );
  }
}

export default EthChart;
