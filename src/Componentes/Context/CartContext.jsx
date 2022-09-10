import React, {useState, useContext } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCarrito(carrito.map(prod=>{
                return prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod;
            })); 
        }else{
            setCarrito([...carrito, {...item, cantidad: cantidad, stock: item.stock - cantidad, total: item.price * cantidad}])
        }
        console.log('item :>> ', item.stock);
    }
    console.log('carrito :>> ', carrito);

    const clear = () => setCarrito([]);
    const isInCart = (id) => carrito.find(prod => prod.id === id) ? true : false;
    const removeItem = (id) => setCarrito(carrito.filter(prod => prod.id !== id));

    
    return (
        <CartContext.Provider value={{clear, isInCart, removeItem, addItem, carrito}}>{children}</CartContext.Provider>
    )

}
