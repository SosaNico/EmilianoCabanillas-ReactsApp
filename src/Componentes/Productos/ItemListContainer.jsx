import React, { useState, useEffect } from 'react';
// import { PRODUCTOS } from '../mock/Productos';
import { useParams} from 'react-router-dom'
import Card from './Card';
import Loader from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { category } = useParams();
    
   /*  useEffect(() => {
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

    const getData = async (categoria) => {
        try {
            const bbdd = categoria ? query(collection(db, 'Items'), where('categoria', '==', categoria)) : collection(db, 'Items')
            const coleccion = await getDocs(bbdd)
            const resultado = coleccion.docs.map(doc => doc = {id: doc.id, ...doc.data()})
            console.log('resultado :>> ', resultado);
            setProductos(resultado)
        } catch (error) {
            console.log('error :>> ', error);
        }
    }

    useEffect(() => {
        getData(category)
    },[category])

    return (
        <>
        {
            productos.length ? <Card productos={productos}/> : <Loader/>
        }
        </>
    )
}
 
export default ItemListContainer;
