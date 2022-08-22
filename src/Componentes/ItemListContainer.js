import React from "react";

const ItemListContainer = ({saludo}) => {
    const PRODUCTOS = [{id: 1, nombre: 'Remeras ', precio: 1000},{id: 2, nombre: 'Buzos', precio: 1300},{id: 3, nombre: 'Camperas', precio: 1600}]
    return ( 
        <div className="itemList">
            <h2 className="saludo">{saludo}</h2>
            <h3>Nuestros Productos</h3>
            <ul className="listaProd">
                <li className="productos">{PRODUCTOS[0].nombre}</li>
                <li className="productos">{PRODUCTOS[1].nombre}</li>
                <li className="productos">{PRODUCTOS[2].nombre}</li>
            </ul>
        </div>
     );
}
 
export default ItemListContainer;