import React from 'react';
import '../assets/styles/index.scss';
import logo from '../assets/static/logo.png';
import Pokemon from './pokemon';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hola a todos</h1>
      <img src={logo} alt='logo' />
      <Pokemon />
    </div>
  );
};

export default HelloWorld;
