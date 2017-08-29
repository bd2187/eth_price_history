import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../config/categories';

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
