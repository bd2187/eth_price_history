import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import fetchData from './config/api';

import Eth from './components/Eth';
import Nav from './components/Nav/Nav';

import { today, week, month, year } from './config/categories';
import './normalize.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ethData: [],
      error: '',
      loading: false,
      category: today,
      currentETHWorth: {}
    };
    this.changeCategory = this.changeCategory.bind(this);
  }
  componentDidMount() {
    // After component mounts, give state.loading value of true.
    this.setState({ loading: true });

    // Invoke AJAX request. Change state depending on on response
    fetchData()
      .then(response =>
        this.setState({
          ethData: response.data.data,
          error: '',
          loading: false,
          // last item in data array is current ETH worth in USD
          currentETHWorth: response.data.data[response.data.data.length - 1]
        })
      )
      .catch(err => this.setState({ error: err, loading: false }));
  }
  changeCategory(category) {
    // callback function for onClick in Nav component
    this.setState({ category });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            component={() =>
              <Nav
                changeCategory={this.changeCategory}
                currentCategory={this.state.category}
              />}
          />
          <Switch>
            <Route path="/" render={() => <Eth {...this.state} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
