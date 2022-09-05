import React, { useState, useEffect } from 'react';
import { PRODUCTOS } from '../mock/Productos';
import ItemList from './ItemList';
import CartWidget from '../NavBar/CartWidget';
import { useParams} from 'react-router-dom'
import Card from './Card';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { category } = useParams();
    
    const getData = () => {
        return new Promise(res => {
            if(category){
                setTimeout(() => res(PRODUCTOS.filter(items => items.category === category)), 3000)
            }else{
                setTimeout(() => res(PRODUCTOS), 2000)
            }
        })
    }


    useEffect(() => {
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
