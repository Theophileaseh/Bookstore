import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

/* eslint-disable */ 
const Navbar = () => (
  <div className="navbar">
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="menu-links">
          <Link to="./"  className='link books'>Books</Link>
          <Link to="categories"  className='link categories'>Categories</Link>
    </nav>
    <button className="user" type="button"><FaUserCircle className="usericon" /></button>
  </div>
);

export default Navbar;
