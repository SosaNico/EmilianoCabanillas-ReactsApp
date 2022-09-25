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

    const getData = async (categoria) => {
        try {
            const bbdd = categoria ? query(collection(db, 'Items'), where('categoria', '==', categoria)) : collection(db, 'Items')
            const coleccion = await getDocs(bbdd)
            const resultado = coleccion.docs.map(doc => doc = {id: doc.id, ...doc.data()})
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
