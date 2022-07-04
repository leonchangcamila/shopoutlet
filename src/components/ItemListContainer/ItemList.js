import React, { useState, useEffect } from "react";

//imports de compotnmentse
import Item from "../Item/Item";
import LoadingSpinner from "../StaticComponents/LoadingSpinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemList = () => {
	const [comida, setComida] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getComida = async () => {
			const q = query(collection(db, "Productos"));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach(doc => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setComida(docs);
		};
		getComida();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="Spinner">
					<LoadingSpinner />
				</div>
			) : (
				<>
					{comida.map(comida => {
						return (
							<div className="losItems col-md-4" key={comida.id}>
								<Item item={comida} />
							</div>
						);
					})}
				</>
			)}
		</>
	);
};

export default ItemList;