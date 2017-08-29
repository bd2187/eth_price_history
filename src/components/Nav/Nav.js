import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = ['24h', '1w', '1m', '1y'];

function displayCategories(clickEvent) {
  return categories.map(function(category, index) {
    return (
      <li key={`category_${index}`} onClick={clickEvent.bind(null, category)}>
        <NavLink exact activeClassName="active" to="/">
          {category}
        </NavLink>
      </li>
    );
  });
}

function Nav({ changeCategory }) {
  return (
    <ul>
      {displayCategories(changeCategory)}
    </ul>
  );
}

export default Nav;
