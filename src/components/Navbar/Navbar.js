import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <Link to="/">
                <img src="public/" alt="logo" />
            </Link>
            <div className={s.links}>
                <ul>
                    <Link to="/category/celulares">
                        <li>Celulares</li>
                    </Link>
                    <Link to="/category/notebook">
                        <li>Notebook</li>
                    </Link>
                    <Link to="/category/auriculares">
                        <li>Auriculares</li>
                    </Link>
                </ul>
                <hr />
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;