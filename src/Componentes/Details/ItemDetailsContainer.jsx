import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetails from './ItemDetails';
import Loader from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

const ItemDetailsContainer = () => {

    const { id } = useParams();
    const [dataItems, setDataItems] = useState();

    const itemSelect = async (idItem) => {
        try {
            const item = doc(db, 'Items', idItem)
            const resp = await getDoc(item)
            const resultado = {id: resp.id, ...resp.data()}
            setDataItems(resultado)
        } catch (error) {
            console.log('error :>> ', error);
        }
    }
    
    useEffect(() => {
        itemSelect(id)
    },[id])


    return dataItems ? <ItemDetails dataItem={dataItems}/> : <Loader/>
    
}

export default ItemDetailsContainer;
