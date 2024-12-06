import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink, } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { user, handleLogout } = useContext(authContext);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);
  const Dropdown = () => {
    setIsClicked(prevState => !prevState);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);



  const Links = () => {
    return (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all visas">All visas</NavLink></li>
        <li><NavLink to="/add visa">Add Visa</NavLink></li>
        <li><NavLink to="/my add visas">My added visas</NavLink></li>
        <li><NavLink to="/my visa application">My Visa applications</NavLink></li>
        {!user && (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </>
        )}
      </>
    );
  };

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
              {Links()}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Visa Navigator</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links()}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative mr-2" ref={dropdownRef}>
              <NavLink>
                <img
                  className="w-10 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt="userPhoto"
                  onClick={Dropdown}
                />
              </NavLink>

              {isClicked && (
                <div className="absolute bg-white shadow-lg rounded-md p-2 mt-2 right-0 w-48 z-10">
                  <div className="grid items-center">
                    <span>{user?.displayName || 'Username'}</span>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="mr-3">
              <FaUser size={25} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
