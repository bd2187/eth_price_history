import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">
          {'24h'}
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/">
          {'1w'}
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/">
          {'1m'}
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/">
          {'1y'}
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
