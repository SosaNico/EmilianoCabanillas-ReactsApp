import React, { useState, useEffect } from 'react';
import { PRODUCTOS } from '../mock/Productos';
import { useParams} from 'react-router-dom'
import Card from './Card';

const ProductosPrimeraGen = () => {
    const [productosPG, setProductosPG] = useState([])

    const { category } = useParams();
    
    const getData = () => {
        return new Promise(res => {
            if(category){
                setTimeout(() => res(PRODUCTOS.filter(items => items.category === "PrimeraGeneracion")), 500)
            }else{
                setTimeout(() => res(PRODUCTOS), 500)
            }
        })
    }
    useEffect(() => {
        getData().then(dataProd => setProductosPG(dataProd))
    }, [category]);

    return (
        <>
        {
            productosPG.length ? <Card productos={productosPG}/> : <h2>Espere...</h2>
        }
        </>
    )
}
 
export default ProductosPrimeraGen;

