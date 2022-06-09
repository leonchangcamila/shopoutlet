import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import './ItemDetail.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import Spinner from '../../components/Spinner/Spinner';

const ItemDetail = () => {
	const [ItemData, setAlbumData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log('albumData', albumData);

	const { id } = useParams();

	// let albumId = id.id;

	// console.log(albumId);

	useEffect(() => {
		const getItemData = async () => {
			const q = query(collection(db, 'music'), where(documentId(), '==', id));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItemData(docs);
		};
		getItemData();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				albumData.map((data) => {
					return <CardComponent Data={data} />;
				})
			)}
		</div>
	);
};
