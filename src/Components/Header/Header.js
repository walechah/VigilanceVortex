import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import img from '../../logo.svg';

function Header() {
  return (
    <div className='navbar'>
      <div className="right">
        <ul className='list'>
          <li> 
            <Link to="/"><h2>Home</h2></Link>
          </li>
          <li>
            <Link to="/features"><h2>Features</h2></Link>
          </li>
          <li>
            <Link to="/about"><h2>About Us</h2></Link>
          </li>
          <li>
            <Link to="/contact"><h2>Contact Us</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
