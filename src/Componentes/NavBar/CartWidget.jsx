import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Context/CartContext";

import './navBar.css'
const CartWidget = ({cont}) => {
    const {totalProductos, carrito} = useCartContext()
        return (
            <>
            <Link to={'/cart'}>
                <div className={carrito.length ? 'imgCarrito' : 'd-none'}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>{totalProductos()}</span>
                </div>
            </Link>
            </>
        );
    
}

export default CartWidget;