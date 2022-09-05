import React from 'react';
import ItemList from './ItemList';
import CartWidget from '../NavBar/CartWidget';

const Card = ({productos}) => {
    return ( 
        <div>
            <div className="container-fluid">
                <div className="row pt-5">
                    <h3 className="text-center mb-4">NUESTROS PRODUCTOS</h3>
                </div>
                <div className="row">
                    <ItemList productos={productos}/>
                </div>
                <CartWidget />
            </div>
        </div>
     );
}
 
export default Card;