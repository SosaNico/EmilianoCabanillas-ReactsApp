import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../Productos/ItemCount";
import "./details.css";

const ItemDetails = ({ dataItem }) => {
    let { nombre, descripcion, precio, estado } = dataItem;
    const { front, side, back } = dataItem.imagen;

    const [cart, setCart] = useState(false);
    const { addItem } = useCartContext();

    const onAdd = (cantidad) => {
        setCart(true);
        addItem(dataItem, cantidad);
        let stockRestar = dataItem.stock - cantidad;
        dataItem.stock = stockRestar;
    };

    return (
        <>
            <div className='contenedor'>
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
                        <h2 className='title'>{nombre}</h2>
                        <span className='desc'>DESCRIPCION</span>
                        <p>{descripcion}</p>
                        <div className='contDetalles'>
                            <div className='column contEstado'>
                                <span className='textoSup'>ESTADO</span>
                                <span className='textoInf'>{estado}</span>
                            </div>
                            <div className='separador' />
                            <div className='column contStock'>
                                <span className='textoSup'>STOCK</span>
                                <span className='textoInf'>
                                    {dataItem.stock > 0
                                        ? dataItem.stock + " unidades"
                                        : "Sin Stock"}
                                </span>
                            </div>
                        </div>
                        <div className='contPrecio'>
                            <div className='contInfoPrecio'>
                                <span className='textoPrecio'>PRECIO</span>
                                <span className='textoInf'>${precio}</span>
                            </div>
                            <div className='contCompra'>
                                {cart ? (
                                    <div >
                                        <Link to={"/cart"}>
                                            <button className='btnGhost'>
                                                IR AL CARRITO
                                            </button>
                                        </Link>
                                        <Link to={"/categoria/"}>
                                            <button
                                                className='btnSolid'
                                            >
                                                SEGUIR COMPRANDO
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <ItemCount
                                        stock={dataItem.stock}
                                        onClick={onAdd}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;
