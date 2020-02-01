import React from 'react';
import '../assets/styles/index.scss';
import logo from '../assets/static/logo.png';
import Pokemon from './pokemon';

const HelloWorld = () => {
  return (
    <div>
      <nav className='navbar navbar-light'>
        <a className='navbar-brand' href='#'>
          <img src={logo} width='180' height='90' className='d-inline-block  ' alt='logo' />
        </a>
      </nav>
      <h1>Arena</h1>
      {/* <img src={logo} alt='logo' /> */}
      <Pokemon />
    </div>
  );
};

export default HelloWorld;
