const products = [
    {
        name: 'Celular 1',
        price: 45000,
        stock: 4,
        id: 1,
        img: 'public/f1.png',
        category: 'celulares',
    },
    {
        name: 'Celular 2',
        price: 50000,
        stock: 10,
        id: 2,
        img: 'public/f2.png',
        category: 'celulares',
    },
    {
        name: 'Celular 3',
        price: 35000,
        stock: 4,
        id: 3,
        img: 'public/f3.png',
        category: 'celulares',
    },
];
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