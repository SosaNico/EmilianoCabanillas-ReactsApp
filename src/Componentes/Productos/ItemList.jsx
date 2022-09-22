import React from 'react';
import Item from './Item';


const ItemList = ({productos}) => {
    
    return ( 
        <>
            {
                productos.map(productosData =>{
                    const { front } = productosData.imagen
                    return <Item key={productosData.id} nombre={productosData.nombre} precio={productosData.precio} image={front} id={productosData.id}/>
                })
            }
            
        </>
     );
}
 
export default ItemList;