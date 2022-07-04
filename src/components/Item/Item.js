import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	const { name, img, id, stock } = item;

	return (
		<div className="items">
			<Card bg="secondary" text="light" style={{ width: "18rem" }}>
				<Card.Text>
					<br />
					<span>{name}</span>
					<br />
				</Card.Text>
				<Link to={`/detail/${id}`}>
					<Card.Img variant="top" src={img} alt="foto de producto" />
				</Link>
				<Card.Body>
					<Card.Text>Stock: {stock}</Card.Text>
					<Button variant="dark">
						<Link className="letraLink" to={`/detail/${id}`}>
							¡Lo quiero!
						</Link>
					</Button>
				</Card.Body>
			</Card>

			<br />
		</div>
	);
};

export default Item;