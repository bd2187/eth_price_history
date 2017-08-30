import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { today, week, month, year } from '../../config/categories';
import './statistics.css';

function sortUSD(arr) {
  return arr.map(item => item.usd).sort((prev, next) => prev - next);
}

// StatsBox renders in Statistics Component
class StatsBox extends Component {
  renderLabel(category, type) {
    switch (category) {
      case today:
        return `24 hour ${type}`;
      case week:
        return `1 week ${type}`;
      case month:
        return `1 month ${type}`;
      case year:
        return `1 year ${type}`;
      default:
        return null;
    }
  }
  render() {
    const { price, category, type } = this.props;
    return (
      <div className="statsBox">
        <h2 className="label">
          {this.renderLabel(category, type)}
        </h2>
        <h2 className="amount">
          {`$${price}`}
        </h2>
      </div>
    );
  }
}

StatsBox.propTypes = {
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

function Statistics({ modifiedData, category, currentETHWorth }) {
  const sortedUSDArr = sortUSD(modifiedData); // returns array of USD in ascending order
  return (
    <div className="statistics">
      {/*Display current ETH worth in USD*/}
      <div className="statsBox" id="current-eth-usd">
        <p>
          {'1 ETH = '}
        </p>
        <h1>{`$${currentETHWorth.usd}`}</h1>
      </div>

      <div className="mediaQuery">
        {/*Display lowest and highest ETH worth in USD in desired category/timeframe*/}
        <StatsBox price={sortedUSDArr[0]} category={category} type={'low'} />
        <StatsBox
          price={sortedUSDArr[sortedUSDArr.length - 1]}
          category={category}
          type={'high'}
        />
      </div>
    </div>
  );
}

Statistics.propTypes = {
  modifiedData: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  currentETHWorth: PropTypes.object.isRequired
};

export default Statistics;
