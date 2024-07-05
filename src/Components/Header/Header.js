import React from 'react';
import './Header.css';
import img from '../../logo.svg';

function Header() {
  return (
    <div className='navbar'>
      <div className="left">
        <img src={img} alt="Logo" />
      </div>
      <div className="right">
        <ul className='list'>
          <li> 
            <h2>Home</h2>
          </li>
          <li>
            <h2>Features</h2>
          </li>
          <li>
            <h2>About Us</h2>
          </li>
          <li>
            <h2>Contact Us</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
