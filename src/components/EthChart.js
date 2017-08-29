import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class EthChart extends Component {
  configureChart(arr = []) {
    console.log(arr);
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
  render() {
    return (
      <div>
        <Line data={this.configureChart(this.props.ethData)} />
      </div>
    );
  }
}

export default EthChart;
