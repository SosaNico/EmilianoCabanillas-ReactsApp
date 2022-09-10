import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetails from './ItemDetails';
import { PRODUCTOS } from '../mock/Productos';

const ItemDetailsContainer = () => {

    const { id } = useParams();
    const [dataItems, setDataItems] = useState();
    
    useEffect(()=>{
        const getData = new Promise (res => setTimeout(() => res(PRODUCTOS.find(prod => prod.id === Number(id))), 500));

        getData.then(res =>  setDataItems(res)
        )},[])

    return dataItems ? <ItemDetails dataItem={dataItems}/> : <h2>Espere, por favor...</h2>
    
}

export default ItemDetailsContainer;
