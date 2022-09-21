import React, { useState, useEffect } from 'react';
// import { PRODUCTOS } from '../mock/Productos';
import { useParams} from 'react-router-dom'
import Card from './Card';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { category } = useParams();
    
    /* useEffect(() => {
        const getData = () => {
            return new Promise(res => {
                if(category){
                    setTimeout(() => {
                        res(PRODUCTOS.filter(items => items.category === category))
                    }, 1500)
                }else{
                    setTimeout(() => {
                        <Loader/>
                        res(PRODUCTOS)
                    }, 500)
                }
            })
        }

        getData().then(dataProd => setProductos(dataProd))
    }, [category]); */

    return (
        <>
        {
            productos.length ? <Card productos={productos}/> : <Loader/>
        }
        </>
    )
}
 
export default ItemListContainer;
