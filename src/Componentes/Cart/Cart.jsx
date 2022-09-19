import React from "react";
import { useCartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { carrito, cuentaTotal } = useCartContext();

    if (carrito.length === 0) {
        return <>
            {
                <h2 className='tituloCarrito'>No hay productos cargados</h2>
            }
        </>;
    }
    return (
        <>
        <h2 className='tituloCarrito'>TU CARRITO DE COMPRAS</h2>
        <div className="contCarr">
            <div className="contMap">
                {carrito.map((producto) => {
                    return <CartItem key={producto.id} producto={producto} />;
                })}
            </div>
            <div className="contTotales">
                <span>TOTAL A PAGAR</span>
                <span>${cuentaTotal()}</span>
                <button className='btnComprar'>Finalizar Compra</button>
            </div>
        </div>
        </>
    );
};

export default Cart;
