import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Stocker &nbsp;<i class='fas fa-chart-line' />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link to='/search_sompany' className='nav-links' onClick={closeMobileMenu}>Search Company</Link>
            </li>

            {/* <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
