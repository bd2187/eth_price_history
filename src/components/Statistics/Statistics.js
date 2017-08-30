import React, { Component } from 'react';
import { today, week, month, year } from '../../config/categories';
import './statistics.css';

function renderLabel(category, type) {
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

function sortUSD(arr) {
  return arr.map(item => item.usd).sort((prev, next) => prev - next);
}

function Statistics({ modifiedData, category, currentETHWorth }) {
  const sortedUSDArr = sortUSD(modifiedData);
  return (
    <div className="statistics">
      <div className="statsBox" id="current-eth-usd">
        <p>
          {'1 ETH = '}
        </p>
        <h1>{`$${currentETHWorth.usd}`}</h1>
      </div>

      <div className="mediaQuery">
        <div className="statsBox">
          <h2 className="label">
            {renderLabel(category, 'low')}
          </h2>
          <h2 className="amount">
            {`$${sortedUSDArr[0]}`}
          </h2>
        </div>

        <div className="statsBox">
          <h2 className="label">
            {renderLabel(category, 'high')}
          </h2>
          <h2 className="amount">
            {`$${sortedUSDArr[sortedUSDArr.length - 1]}`}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
