const products = [
    {
        name: 'Celular Pink',
        price: 45000,
        stock: 5,
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/fb-reactjs-e3b63.appspot.com/o/f3.png?alt=media&token=03ec3978-21a1-413f-92f7-aed6cd02da4b",
        category: 'celulares',
        discount: 50,
    },
    {
        name: 'Celular silver',
        price: 55000,
        stock: 5,
        id: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/fb-reactjs-e3b63.appspot.com/o/f2.png?alt=media&token=930e3c34-23ef-4a7e-bf44-1d1643fccac5",
        category: 'celulares',
        discount: 25,
    },
    {
        name: 'Celulares silver',
        price: 50000,
        stock: 10,
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/fb-reactjs-e3b63.appspot.com/o/f.png?alt=media&token=930e3c34-23ef-4a7e-bf44-1d1643fccac5",
        category: 'celulares',
        discount: 10,
    }
];

const product = {
    name: 'Celulares silver',
    price: 50000,
    stock: 10,
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/fb-reactjs-e3b63.appspot.com/o/f.png?alt=media&token=930e3c34-23ef-4a7e-bf44-1d1643fccac5",
    category: 'celulares',
    discount: 10,
};

export const traerProductos = (cat) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === cat
        );
        setTimeout(() => {
            if (cat === undefined) {
                resolve(products);
            } else {
                resolve(productosFiltrados);
            }
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};