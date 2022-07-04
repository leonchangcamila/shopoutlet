import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import ItemList from "./ItemList";
import LoadingSpinner from "../StaticComponents/LoadingSpinner";

// grilla de productos, por el momento tengo 4 para este demo
const ItemListContainer = ({ saludo }) => {
	let id = useParams();
	let userCategory = id.category;

	// intenté con varios modos y sólo useState me permite guardar mis productos posterior al render
	const [arrayItems, setarrayItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCategory = async () => {
			const q = query(collection(db, "Productos"));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach(doc => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), category: doc.category });
			});
			// console.log(docs);
			setarrayItems(docs);
		};
		getCategory();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [userCategory]);

	return (
		<div>
			<h3>{saludo}</h3>
			<br />
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Container>
					<div className="itemContainer">
						<ItemList items={arrayItems}></ItemList>
					</div>
				</Container>
			)}
		</div>
	);
};

export default ItemListContainer;