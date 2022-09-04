import React, { useState, useEffect } from 'react';
import { PRODUCTOS } from '../mock/Productos';
import ItemList from './ItemList';
import CartWidget from '../NavBar/CartWidget';


const getData = () => {
    return new Promise(res =>{
        setTimeout(() => {
            res(PRODUCTOS)
        }, 1500);
    })
}
    
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getData().then(dataProd => setProductos(dataProd))
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-5">
                    <h3 className="text-center mb-4">NUESTROS PRODUCTOS</h3>
                </div>
                <div className="row">
                    <ItemList productos={productos}/>
                </div>
                <CartWidget />
            </div>
        </div>
    );
}
 
export default ItemListContainer;





/* const ItemListContainer = () => {
    let status = 200
    const getData = (status) => {
        return new Promise ((res, rej) =>{
            if(status === 200){
                res(PRODUCTOS)
            }else{
                rej('Problemas en la conexion')
            }
        })
    }
    
    const [productos, setProductos ] = useState([])
    useEffect(()=>{
        getData(status)
        .then(productosData) 
        .catch(error =>{
            console.error(error);
        })
    }, [])
    

    const [cont, setCont] = useState(0)
    return (
        <>
            
            
                    {
                    productosData.map(DataProd =>(
                            <div className="imgPoster col-md-3 d-flex flex-md-column" key={DataProd.id}>
                                <Item title={DataProd.title} image={DataProd.image} price={DataProd.price}/>
                            </div>
                        ))
                    }
                </div>
            </div>
                
        </>
    );
}

export default ItemList;
*/