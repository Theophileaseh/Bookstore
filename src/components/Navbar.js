import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import links from '../routes';

const Navbar = () => (
  <div className="navbar">
    <h1 className="logo">Bookstore CMS</h1>
    <nav>
      <ul className="menu-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}

      </ul>
    </nav>
    <button className="user" type="button"><FaUserCircle className="usericon" /></button>
  </div>
);

export default Navbar;
