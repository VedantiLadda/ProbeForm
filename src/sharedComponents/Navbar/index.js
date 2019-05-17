import React from 'react';
import Label from '../Label'
import './main.css';
const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav data-component="Navbar">
                <div className="nav-wrapper">
                    <Label className="brand-logo center"></Label>
                    <Label className="logout">Logout</Label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;