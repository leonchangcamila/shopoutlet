import React from 'react';
import './Header.css';

import img from './Compras.png';

const Header = () => {
	return (
		<div className='header-container'>
			<img src={img} alt='logo' width='150' />
		</div>
	);
};

export default Header;