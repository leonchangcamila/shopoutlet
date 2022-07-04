import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	collection,
	query,
	where,
	getDocs,
	documentId
} from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";


import ItemDetail from "./ItemDetail";
import LoadingSpinner from "../StaticComponents/LoadingSpinner";

const ItemDetailContainer = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();



	useEffect(() => {
		const getProductsData = async () => {
			const q = query(
				collection(db, "Productos"),
				where(documentId(), "==", id)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProductsData(docs);
		};
		getProductsData();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<div className="Spinner">
					<LoadingSpinner />
				</div>
			) : (
				productsData.map(productsData => {
					return <ItemDetail item={productsData} key={productsData.id} />;
				})
			)}
		</div>
	);
};

export default ItemDetailContainer;