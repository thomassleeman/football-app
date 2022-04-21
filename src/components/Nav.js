import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { useGlobalContext } from '../context';

export default function Nav() {
  const { dispatch } = useGlobalContext();

  const leaguesBtn = () => {
    console.log('leagues button was clicked');
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink onClick={() => dispatch({ type: 'LOADING' })} to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <button onClick={() => leaguesBtn()}>Leagues</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
