import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaImage, FaUser, FaSignInAlt, FaUserPlus,FaUpload } from 'react-icons/fa';
import '../css/nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span class ="link-text">InspireNest</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">
            <FaHome />
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/upload" className="nav-link" activeClassName="active">
            <FaUpload />
            <span className="link-text">Upload</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/design" className="nav-link" activeClassName="active">
            <FaImage />
            <span className="link-text">Designs</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link" activeClassName="active">
            <FaUser />
            <span className="link-text">Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" activeClassName="active">
            <FaSignInAlt />
            <span className="link-text">Login</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            <FaUserPlus />
            <span className="link-text">Signup</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
