import React, { useState, useEffect } from 'react';
import { PRODUCTOS } from '../../mock/Productos';
import { useParams} from 'react-router-dom'
import Card from '../Card';

const ProductosEdicionESP = () => {
    const [productosES, setProductosES] = useState([])

    const { category } = useParams();
    
    const getData = () => {
        return new Promise(res => {
            if(category){
                setTimeout(() => res(PRODUCTOS.filter(items => items.category === "EdicionEspecial")), 500)
            }else{
                setTimeout(() => res(PRODUCTOS), 500)
            }
        })
    }
    useEffect(() => {
        getData().then(dataProd => setProductosES(dataProd))
    }, [category]);

    return (
        <>
        {
            productosES.length ? <Card productos={productosES}/> : <h2>Espere...</h2>
        }
        </>
    )
}
 
export default ProductosEdicionESP;

