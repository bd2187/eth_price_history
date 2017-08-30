import React, { Component } from 'react';
import { today, week, month, year } from '../../config/categories';

function renderLabel(category, type) {
  switch (category) {
    case today:
      return (
        <h1>
          {`24 hour ${type}`}
        </h1>
      );
    case week:
      return (
        <h1>
          {`1 week ${type}`}
        </h1>
      );
    case month:
      return (
        <h1>
          {`1 month ${type}`}
        </h1>
      );
    case week:
      return (
        <h1>
          {`1 year ${type}`}
        </h1>
      );
    default:
      return null;
  }
}

function Statistics({ lowestUSD, highestUSD, category }) {
  return (
    <div style={{ color: '#FFF' }}>
      <h1>
        {renderLabel(category, 'low')}
      </h1>
      <h1>
        {`$${lowestUSD.usd}`}
      </h1>
      <h1>
        {renderLabel(category, 'high')}
      </h1>
      <h1>
        {`$${highestUSD.usd}`}
      </h1>
    </div>
  );
}

export default Statistics;
