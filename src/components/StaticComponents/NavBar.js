import React from "react";
import { Link } from "react-router-dom";

// imports intenertnos compoente
import CartWidget from "../Cart/CartWidget";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// este navbar es un componente sacado de react-bootstrap
const NavBar = () => {
	return (
		<Navbar
			className="Navigation"
			collapseOnSelect
			sticky="top"
			expand="lg"
			bg="dark"
			variant="dark"
			defaultactivekey="/home"
		>
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src="" alt="" height="20" /> Inicio
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="me-auto">
						<ul>
							<li>
								<Link to="/about">ShopOutlet</Link>
							</li>
							<li>
								<Link to="/contact">Contacto</Link>
							</li>
						</ul>

						<NavDropdown title="Categorías">
							<NavDropdown.Item key="arena">
								<Link to="/category/arena">Celulares</Link>
							</NavDropdown.Item>
							<NavDropdown.Item key="comidaPerro">
								<Link to="/category/perro">Auriculares</Link>
							</NavDropdown.Item>
							<NavDropdown.Item key="comidaGato">
								<Link to="/category/gato">Notebooks</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Container>
							<Link to="/cart">
								<CartWidget />
							</Link>
						</Container>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;