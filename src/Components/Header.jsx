import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const Link= <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="all">All visas</NavLink></li>
      <li><NavLink to="add">Add Visa</NavLink></li>
      <li><NavLink to="my">My added visas</NavLink></li>
      <li><NavLink to="visa">My Visa applications</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/registration">Registration</NavLink></li>
  </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
          Link
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Visa Navigator</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {
          Link
        }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Header;