import React, { useState, useEffect } from "react";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";
// FIREBASE
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// COMPONENTS
import Item from "../components/Item/Item";

const CategoryView = () => {
	const [comidaData, setComidaData] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		const getComidaData = async () => {
			const q = query(
				collection(db, "Productos"),
				where("category", "==", category)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setComidaData(docs);
		};
		getComidaData();
	}, [category]);

	return (
		<>
			<br />
			<h3>Resultados para: {category}</h3>
			<div className="catContain">
				{comidaData.map(data => {
					return <Item className="catItem" item={data} key={data.id} />;
				})}
			</div>
		</>
	);
};

export default CategoryView;