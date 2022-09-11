import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../Productos/ItemCount";
import "./details.css";

const ItemDetails = ({ dataItem }) => {
    let { title, description, price, estado } = dataItem;
    const { front, side, back } = dataItem.image;

    const [cart, setCart] = useState(false);
    const { addItem } = useCartContext();


    const onAdd = (cantidad) =>{
        setCart(true)
        addItem(dataItem, cantidad)
        let stockRestar = dataItem.stock - cantidad
        dataItem.stock = stockRestar;
    }

    return (
        <>
            <div className='contenedor' >
                <div className='main'>
                    <div className='contImg'>
                            <div className='imgMain'>
                                <img
                                    className='imgPrincipal'
                                    src={front}
                                    alt='Imagen Frente'
                                />
                            </div>
                        <div className='imgLat'>
                            <img
                                className='imgLateral'
                                src={back}
                                alt='Imagen Atras'
                            />
                            <img
                                className='imgLateral'
                                src={side}
                                alt='Imagen Lateral'
                            />
                        </div>
                    </div>
                    <div className='contDescripcion'>
                        <h2 className='title'>{title}</h2>
                        <span className='desc'>DESCRIPCION</span>
                        <p>{description}</p>
                        <div className='contDetalles'>
                            <div className='column contEstado'>
                                <span className='textoSup'>ESTADO</span>
                                <span className='textoInf'>{estado}</span>
                            </div>
                            <div className='separador' />
                            <div className='column contStock'>
                                <span className='textoSup'>STOCK</span>
                                <span className='textoInf'>
                                    {dataItem.stock > 0 ? dataItem.stock + ' unidades' : 'Sin Stock'}
                                </span>
                            </div>
                        </div>
                        <div className='contPrecio'>
                            <div className='contInfoPrecio'>
                                <span className='textoPrecio'>PRECIO</span>
                                <span className='textoInf'>${price}</span>
                            </div>
                            <div className='contCompra'>
                                {cart 
                                ? (<Link to={'/cart'}><button className='btnComprar btn_ inptCont'>COMPRAR</button></Link>)
                                : (<ItemCount stock={dataItem.stock} onClick={onAdd}/>)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;
