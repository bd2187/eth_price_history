import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../config/categories';
import './nav.css';

function displayCategories(clickEvent, current) {
  return categories.map(function(category, index) {
    return (
      <li
        className="nav-item"
        key={`category_${index}`}
        onClick={clickEvent.bind(null, category)}
      >
        <button style={{ color: category == current ? '#19e5ad' : '#FFF' }}>
          {category}
        </button>
      </li>
    );
  });
}

function Nav({ changeCategory, currentCategory }) {
  return (
    <div className="nav">
      <ul>
        {displayCategories(changeCategory, currentCategory)}
      </ul>
    </div>
  );
}

export default Nav;
