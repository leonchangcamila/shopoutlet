import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //agregar items al carrito
    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)) {
            alert('Ya está en el carrito');
            //sumar la cantidad
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };
    //revisar si está en el carrito (some, findIndex, find, etc...)
    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id);
        return respuesta;
    };

    //vaciar carrito
    const vaciarCarrito = () => {
        setCart([]);
    };

    //eliminar por item

    //sumar total del carrito (precio * cantidad)

    //sumar la cantidad de unidades del carrito

    return (
        <CartContext.Provider value={{ cart, addToCart, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;