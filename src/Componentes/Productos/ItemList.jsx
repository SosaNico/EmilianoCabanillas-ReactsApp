import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    
    return ( 
        <>
            {
                productos.map(productosData =>{
                    const { video, front } = productosData.image
                    return <Item key={productosData.id} title={productosData.title} price={productosData.price} image={front} video={video} id={productosData.id}/>
                })
            }
            
        </>
     );
}
 
export default ItemList;