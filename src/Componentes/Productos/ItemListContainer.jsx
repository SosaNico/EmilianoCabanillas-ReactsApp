import React, { useState, useEffect } from 'react';
import { PRODUCTOS } from '../mock/Productos';
import { useParams} from 'react-router-dom'
import Card from './Card';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { category } = useParams();
    
    useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                if(category){
                    setTimeout(() => res(PRODUCTOS.filter(items => items.category === category)), 500)
                }else{
                    setTimeout(() => res(PRODUCTOS), 500)
                }
            })
        }
        
        getData().then(dataProd => setProductos(dataProd))
    }, [category]);

    return (
        <>
        {
            productos.length ? <Card productos={productos}/> : <h2>Espere...</h2>
        }
        </>
    )
}
 
export default ItemListContainer;
