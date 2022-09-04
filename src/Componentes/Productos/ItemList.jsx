import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return ( 
        <>
            {
                productos.map(productosData =>{
                    return <Item key={productosData.id} title={productosData.title} price={productosData.price} image={productosData.image}/>
                })
            }
            
        </>
     );
}
 
export default ItemList;