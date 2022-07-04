import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

	const isInCart = id => {
		return carrito.some(el => el.item.id === id);
	};

	const addExistingItem = (item, count) => {
		let newcarrito = carrito;
		let existingItem = newcarrito.find(el => el.item.id === item.id);
		existingItem.count += count;
		if (existingItem.count > existingItem.item.stock) {
			existingItem.count = existingItem.item.stock;
		}
	};

	const addItem = (item, count) => {
		isInCart(item.id)
			? addExistingItem(item, count)
			: setCarrito([...carrito, { item: item, count: count }]);
	};

	const removeItem = item => {
		setCarrito(carrito.filter(el => el.item.id !== item));
	};

	const clear = () => {
		setCarrito([]);
	};

	return (
		<CartContext.Provider
			value={{ carrito, addItem, removeItem, clear, isInCart }}
		>
			{children}
		</CartContext.Provider>
	);
};