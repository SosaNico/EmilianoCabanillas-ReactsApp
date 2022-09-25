import React, {useState, useContext, createContext } from 'react';
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCarrito(carrito.map(prod => prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod )); 
        }else{
            setCarrito([...carrito, {...item, cantidad: cantidad, stock: item.stock - cantidad, total: item.precio * cantidad}])
        }
    }
    //console.log('carrito context :>> ', carrito);
    const clear = () => setCarrito([]);
    const isInCart = (id) => carrito.find(prod => prod.id === id) ? true : false;
    const removeItem = (id) => setCarrito(carrito.filter(prod => prod.id !== id));

    const cuentaTotal = () => carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    const totalProductos = () => carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

    
    return (
        <CartContext.Provider value={{clear, isInCart, removeItem, addItem, cuentaTotal, totalProductos, carrito}}>{children}</CartContext.Provider>
    )

}
