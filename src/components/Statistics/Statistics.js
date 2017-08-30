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

function Statistics({ modifiedData, category }) {
  const sortedUSDArr = sortUSD(modifiedData);
  return (
    <div className="statistics">
      <div className="statsBox">
        <h1 className="label">
          {renderLabel(category, 'low')}
        </h1>
        <h1 className="amount">
          {`$${sortedUSDArr[0]}`}
        </h1>
      </div>

      <div className="statsBox">
        <h1 className="label">
          {renderLabel(category, 'high')}
        </h1>
        <h1 className="amount">
          {`$${sortedUSDArr[sortedUSDArr.length - 1]}`}
        </h1>
      </div>
    </div>
  );
}

export default Statistics;
