import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

const elCarrito = <img src="" width="18px" alt="carro de compra" />;

const CartWidget = () => {
	const { carrito } = useContext(CartContext);

	return (
		<Button variant="outline-light">
			{elCarrito} Carrito
			{carrito.length > 0 ? (
				<Badge bg="secondary">{carrito.reduce((a, b) => a + b.count, 0)}</Badge>
			) : null}
		</Button>
	);
};

export default CartWidget;