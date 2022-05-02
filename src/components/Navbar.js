import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>KMI</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/category/camperas">Camperas</Link>
                <Link to="/category/pantalones">Pantalones</Link>
                <Link to="/category/sweters">Sweters</Link>
            </ul>
        </nav>
    );
};
export default Navbar;
