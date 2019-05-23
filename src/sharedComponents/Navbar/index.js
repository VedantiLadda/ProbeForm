import React from 'react';
import formatString from 'utilities/formatString';
import Label from '../Label';
import './main.css';

const Navbar = props => {
  const { type, handleLogout } = props;
  console.log(props);
  return (
    <div className="navbar-fixed">
      <nav data-component="Navbar">
        <div className="nav-wrapper">
          <Label className="brand-logo center">{formatString(type)}</Label>
          <Label className="logout" handleClick={handleLogout}>
            Logout
          </Label>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
