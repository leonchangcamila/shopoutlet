import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { traerProductos } from '../../api/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    //tarea pesada
    useEffect(() => {
        traerProductos
            .then((res) => {
                setItem(res.find((prod) => prod.id === parseInt(id)));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                //otra accion
                setLoading(false);
            });
    }, [id]);

    return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;