import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import fetchData from '../config/api';

import EthChart from './EthChart';

class Eth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ethData: [],
      error: '',
      loading: false,
      category: '1 day'
    };
  }
  componentDidMount() {
    // After component mounts, give state.loading value of true.
    this.setState({ loading: true });
    // Invoke AJAX request. Change state depending on on response
    fetchData()
      .then(response =>
        this.setState({
          ethData: response.data.data.slice().reverse().slice(0, 25).reverse(),
          error: '',
          loading: false
        })
      )
      .catch(err => this.setState({ error: err, loading: false }));
  }
  render() {
    if (this.state.ethData.length === 0) {
      return null;
    }
    return (
      <div>
        <EthChart {...this.state} />
      </div>
    );
  }
}

export default Eth;
