import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import fetchData from '../config/api';

class Eth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    fetchData()
      .then(response =>
        this.setState({
          data: response.data.data,
          error: '',
          loading: false
        })
      )
      .catch(err => this.setState({ error: err, loading: false }));
  }

  render() {
    console.log(this.state);
    return <div className="chart" />;
  }
}

export default Eth;
