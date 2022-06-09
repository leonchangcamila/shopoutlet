import React, { useState, useEffect } from 'react';
// REACT ROUTER DOM
import { useParams } from 'react-router-dom';
// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// COMPONENTS
import CardComponent from '../../components/CardComponent/CardComponent';

const GenderType = () => {
	const [albumData, setData] = useState([]);

	const { genre } = useParams();

	useEffect(() => {
		const getData = async () => {
			const q = query(collection(db, 'music'), where('genre', '==', genre));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setData(docs);
		};
		getData();
	}, [genre]);

	return (
		<div>
			<h1>Hello</h1>
			{albumData.map((data) => {
				return (
					<div>
						<CardComponent Data={data} key={data.id} />
					</div>
				);
			})}
		</div>
	);
};

export default GenderType;