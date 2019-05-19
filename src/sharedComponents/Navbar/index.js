import React from 'react';
import Label from '../Label';
import './main.css';

const Navbar = (props) => {
  const { type } = props;
  return (
    <div className="navbar-fixed">
      <nav data-component="Navbar">
        <div className="nav-wrapper">
          <Label className="brand-logo center">{type}</Label>
          <Label className="logout">Logout</Label>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
