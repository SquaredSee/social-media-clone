import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id="header" style={{ borderStyle: 'solid' }}>
    <p>This is the Header component</p>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>
);

export default Header;
