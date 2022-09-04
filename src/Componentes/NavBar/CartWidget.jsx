import React from 'react';
/* import ItemList from './Productos/ItemList'; */

const CartWidget = ({cont}) => {
        return (
            <div className="imgCarrito">
                <span>{cont}</span>
            </div>
        );
    
}

export default CartWidget;