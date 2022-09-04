import React, { useState, useEffect } from 'react';
import ItemDetails from './ItemDetails';
import { PRODUCTOS } from '../mock/Productos';

const ItemDetailsContainer = () => {
    const [dataItems, setDataItems] = useState();

    useEffect(()=>{
        const getData = new Promise (res => setTimeout(() => res(PRODUCTOS), 2100));

        getData
        .then(res => {
            setDataItems(res.find(prod => prod.id === 1))
            console.log(dataItems);
        }).catch(e => console.log(e));
    },[])

    return dataItems ? <ItemDetails dataItem={dataItems}/> : <h2>Espere, por favor...</h2>
    
}

export default ItemDetailsContainer;
