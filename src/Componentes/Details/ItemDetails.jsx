import React from 'react';
import ItemCount from '../Productos/ItemCount';
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
                        <div className="descrip">
                            <span>DESCRIPCION:</span>
                            <p>{dataItem.description}</p>
                        </div>
                    </div>
                    <div className="contPrecio">
                        <div className="contPrecio__data">
                            <span className="signo">$</span>
                            <span className="N">{dataItem.price}</span>
                        </div>
                    </div>
                    <div className="contContador">
                        <ItemCount stock={dataItem.stock}/>
                    </div>
                    <button className='btnComprar btn_ inptCont'>COMPRAR</button>
                </div>
            </div>
        </>
    );
}

export default ItemDetails;

