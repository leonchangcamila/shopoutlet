import React from "react";
import { Card, Container } from "react-bootstrap";
import { useContext } from "react";
import FooterPage from "../StaticComponents/FooterPage";

// Imports de otros componentes
import { CartContext } from "../../context/CartContext";
import ItemCount from "../Item/ItemCount";

const ItemDetail = ({ item = [] }) => {
	const { name, img, amount, price, stock, weight } = item;
	const Cart = useContext(CartContext);

	const onAdd = count => {
		Cart.addItem(item, count);
	};

	return (
		<>
			<div className="itemDetails">
				<div className="theItems">
					<Card bg="secondary" text="light" style={{ width: "18rem" }}>
						<Card.Text>
							<br />
							<span>{name}</span>
							<br />
							<span>
								<span>${price}</span>
								<br />
								<span>{weight}</span>
							</span>
						</Card.Text>

						<Card.Img variant="top" src={img} alt="foto de producto" />

						<Card.Body>
							<span>¡Quedan: {stock} unidades!</span> <br /> <br />
							<ItemCount
								stock={stock}
								initial={amount}
								onAdd={onAdd}
								producto={item.name}
							></ItemCount>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className="detailText">
				<Container>
					<h3>Detalles del producto:</h3>
					<p>
						{" "}
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Perspiciatis fugiat, quidem architecto autem porro, libero provident
						hic doloribus consequatur aliquam soluta quo id? Molestias sint
						provident quos cum nostrum velit.{" "}
					</p>
					<h4>Ingredientes</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum
						consequuntur unde aut! Qui suscipit corrupti fuga deserunt nulla
						sapiente sit expedita, error delectus. Obcaecati officiis iste culpa
						dignissimos. Neque.
					</p>
				</Container>
			</div>
			<FooterPage />
		</>
	);
};

export default ItemDetail;