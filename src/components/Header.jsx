import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <nav className='header__nav nav'>
          <Link to={`/`} className='nav__link'>
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
