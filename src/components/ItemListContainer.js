import React from "react";

const ItemListContainer = ({ producto , precio }) => {
    return (
        <div className={style.prueba}>
            <h2>Producto: {producto}</h2>
            <h2>Precio: {precio}</h2>
        </div>
    );
};

export default ItemListContainer;