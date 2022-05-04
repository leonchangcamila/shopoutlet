import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>KMI</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Camperas</li>
                    <li>Sweters</li>
                    <li>Botas</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};
export default Navbar;
