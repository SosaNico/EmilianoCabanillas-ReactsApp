import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetails from './ItemDetails';
import { PRODUCTOS } from '../mock/Productos';
import Loader from '../Loader/Loader';

const ItemDetailsContainer = () => {

    const { id } = useParams();
    const [dataItems, setDataItems] = useState();
    
    /* useEffect(()=>{
        const getData = new Promise (res => setTimeout(() => res(PRODUCTOS.find(prod => prod.id === Number(id))), 1600));

        getData.then(res =>  setDataItems(res)
        )},[])
 */
    return dataItems ? <ItemDetails dataItem={dataItems}/> : <Loader/>
    
}

export default ItemDetailsContainer;
