import React from 'react';
import './Header.css';

const Header = () => (
  <div class="header">
    <a href="#default" class="logo">
      Sorting Visualizer &#169;
    </a>
    <div class="header-right">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </div>
);
export default Header;
