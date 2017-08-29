import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import fetchData from '../config/api';

class Eth extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetchData()
      .then(response => console.log(response.data.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="chart">
        <Line data={null} />
      </div>
    );
  }
}

export default Eth;
