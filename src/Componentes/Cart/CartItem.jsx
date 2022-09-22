import React from "react";
import { useCartContext } from "../Context/CartContext";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import './CartItem.css'


const CartItem = ({ producto }) => {
    const { removeItem, totalProductos } = useCartContext();
    const { id, nombre, cantidad, precio, total } = producto;
    return (
        <>
            <div className='contCarrito'>
                <div className='contProducto'>
                    <span>{nombre}</span>
                    <div className='contDatos'>
                        <div className='cant'>
                            <span>Cantidad:</span>
                            <span>{cantidad}</span>
                        </div>
                        <div className='conTotal'>
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                        <div className='contOpciones'>
                            <span className="faTrash"  onClick={()=>{removeItem(id); console.log('object')}}>
                                <FontAwesomeIcon  icon={faTrash} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
