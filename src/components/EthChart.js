import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class EthChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: ''
          }
        ]
      }
    };
  }
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
    // console.log(this.props);

    return (
      <div>
        <Line data={this.configureChart(this.props.ethData)} />
      </div>
    );
  }
}

export default EthChart;
