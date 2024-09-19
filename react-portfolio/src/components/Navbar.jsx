import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="purple-gradient_text">EM</p>
      </NavLink>
      <nav className="flex text-lg  font-medium">
        <NavLink
          to="/about"
          className={
            (({ isActive }) =>
              isActive ? 'text-purple-500' : 'text-black-500',
            'hover:text-purple-400')
          }
        >
          About Me
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={
            (({ isActive }) => (isActive ? 'text-blue-400' : 'text-black-500'),
            'hover:text-blue-400')
          }
        >
          Contact
        </NavLink> */}
      </nav>

      <NavLink
        className="flex m-0 p-0 w-10 "
        to="https://github.com/emcismas?tab=repositories"
      >
        <img src="src\assets\icons\github.png" className="w-10 m-0 p-0 " />
      </NavLink>
    </header>
  );
};

export default Navbar;
