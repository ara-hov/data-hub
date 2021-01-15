import React from 'react';
import { Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        activeClassName='navbar__link--selected'
        className='navbar__link'
      >
        <span className='navbar__link--item'>Create Data Product</span>
      </NavLink>
      <Divider type='vertical' />
      <NavLink
        to='/'
        activeClassName='navbar__link--selected'
        className='navbar__link'
      >
        <span className='navbar__link--item'>My Data Products</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
