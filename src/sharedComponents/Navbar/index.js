import React from 'react';
import 'main.css';
const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav data-component="Navbar">
                <div className="nav-wrapper">
                    <label className="brand-logo center"></label>
                    <label>Logout</label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;