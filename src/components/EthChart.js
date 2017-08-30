import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { today, week, month, year } from '../config/categories';

class EthChart extends Component {
  configureChart(arr = []) {
    return {
      labels: arr.map(dataObj => dataObj.time),
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
        return arr.slice().reverse().slice(0, 24).reverse();

      case week:
        slicedArr = arr.slice().reverse().slice(0, 168);
        var arrayToDisplay = [];
        for (let i = 0; i < slicedArr.length; i += 24) {
          arrayToDisplay.push(slicedArr[i]);
        }
        return arrayToDisplay.reverse();

      case month:
        var slicedArr = arr.slice().reverse().slice(0, 730);
        var arrayToDisplay = [];
        for (let i = 0; i < slicedArr.length; i += 24) {
          arrayToDisplay.push(slicedArr[i]);
        }
        return arrayToDisplay.reverse();

      case year:
        var slicedArr = arr.slice().reverse().slice(0, 8760);
        var arrayToDisplay = [];
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

    return (
      <div>
        <Line data={this.configureChart(modifiedData)} />
      </div>
    );
  }
}

export default EthChart;
