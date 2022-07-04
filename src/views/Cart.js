import React, { useContext, useState, useEffect } from "react";

// imports de componentes
import { CartContext } from "../context/CartContext";
import FooterPage from "../components/StaticComponents/FooterPage";
import CartItem from "../components/Cart/CartItem";
import LoadingSpinner from "../components/StaticComponents/LoadingSpinner";
import Shopper from "../components/Cart/Shopper";

const stylings = {
	height: "80vh"
};

let total = 0;

const Cart = () => {
	const { carrito } = useContext(CartContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	});

	//console.log(carrito);

	total = carrito.reduce((acc, el) => acc + el.item.price * el.count, 0);

	return (
		<div className="cart">
			<div className="container">
				{isLoading ? (
					<LoadingSpinner />
				) : (
					<>
						<br />
						<div className="mainShop" style={stylings}>
							{carrito.length > 0 ? (
								carrito.map(carr => {
									return (
										<div className="shop" key={Math.random()}>
											<CartItem
												key={carr.item.id}
												name={carr.item.name}
												img={carr.item.img}
												producto={carr.item.name}
												price={carr.item.price}
												count={carr.count}
												id={carr.item.id}
											/>
										</div>
									);
								})
							) : (
								<>
									<br />
									<h3>No hay productos en el carrito(</h3>
									<br />
								</>
							)}
						</div>
						<div className="elTotal">
							<br />
							<h3> {"SU TOTAL ES DE $" + total + " CLP"}</h3>
							<br />
						</div>
						{carrito.length > 0 && <Shopper />}
					</>
				)}
			</div>
			<FooterPage />
		</div>
	);
};
export default Cart;

export { total };