import React from 'react';
import './App.css';

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Shop from './views/Shop/Shop';
import ItemDetail from './views/ItemDetail/ItemDetail';
import GenreType from './views/GenreType/GenreType';

// Components
import Header from './components/Header/Header';

import Navigation from './components/Navigation/Navigation';

// CONTEXT
import { ItemsProvider } from './context/Context';

const App = () => {
	return (
		<Router>
			<ItemsProvider>
				<div className='App'>
					<Header />
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/details/:id' element={<ItemDetail />} />
						<Route path='/genre/:genre' element={<GenreType />} />
					</Routes>
				</div>
			</ItemsProvider>
		</Router>
	);
};

export default App;
