import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import fetchData from './config/api';

import Eth from './components/Eth';
import Nav from './components/Nav/Nav';

class App extends Component {
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
          // Show 24 hour Ether history by default
          ethData: response.data.data.reverse().slice(0, 25).reverse(),
          error: '',
          loading: false
        })
      )
      .catch(err => this.setState({ error: err, loading: false }));
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Nav} />
          <Switch>
            <Route path="/" render={() => <Eth {...this.state} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
render(<App />, document.getElementById('root'));
