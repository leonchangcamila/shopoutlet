
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import NavBar from "./components/StaticComponents/NavBar";
import ItemDetailContainer from "./components/DetailContainer/ItemDetailContainer";
import NotFound from "./components/StaticComponents/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

//las Views
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import CategoryView from "./views/CategoryView";

// Provider
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<header>
						{/* hola soy el navbar */}
						<NavBar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/detail/:id" element={<ItemDetailContainer />} />
							<Route path="/category/:category" element={<CategoryView />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</header>
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;