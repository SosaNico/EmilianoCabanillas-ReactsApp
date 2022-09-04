import React from 'react';
import './details.css'

const ItemDetails = ({ dataItem }) => {
    return (
        <>
            <div className="contenedorItem">
                <div className="imgItemCont">
                    <img className="imgItem" src={dataItem.image} alt="" />
                    <div className="contStock">
                        <span>Disponibles:</span>
                        <span> {dataItem.stock} unidades</span>
                    </div>
                </div>
                <div className="detallesItem">
                    <h2 className="nombreItem">{dataItem.title}</h2>
                    <div className="contDetalles">
                        <div className="contColores">
                            <span>COLORES DISPONIBLES</span>
                            <ul>
                                <li>Blanco</li>
                                <li>Negro</li>
                                <li>Gris</li>
                            </ul>
                        </div>
                        <div className="descrip">
                            <span>DESCRIPCION:</span>
                            <p>{dataItem.description}</p>
                        </div>
                    </div>
                    <div className="contPrecio">
                        <h4>PRECIO</h4>
                        <div className="contPrecio__data">
                            <span className="signo">$</span>
                            <span className="N">{dataItem.price}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ItemDetails;