import React, { useContext } from "react";
import { Button } from "react-bootstrap";

// IMPORTS DE PROYECTO
import { CartContext } from "../../context/CartContext";

const CartItem = ({ name, img, id, price, count }) => {
	const carrito = useContext(CartContext);

	return (
		<div className="cont">
			<div className="row g-0">
				<br />
				<div className="col-md-3 cartCositas">
					<img src={img} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="cartTit col-md-3 ">
					<h4 className="text-muted">{name}</h4>
				</div>
				<div className="cartCant col-md-3">
					<h4>{count + " x $" + price} </h4>
				</div>
				<div className="botonEliminacion col-md-3">
					<Button
						type="button"
						className="btn-close"
						variant="danger"
						aria-label="Close"
						onClick={() => carrito.removeItem(id)}
					></Button>
				</div>
			</div>
			<br />
		</div>
	);
};

export default CartItem;