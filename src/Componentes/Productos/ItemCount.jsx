import { React, useState } from "react";
import './items.css'


const ItemCount = ({stock, onClick}) => {

    const [cont, setCont] = useState(1)

    const sumar = () => {
        cont < stock && setCont(cont +1)
    }
    const restar = () =>{
        cont > 0 && setCont(cont- 1 )
    }

    return ( 
        <div className="contContador">
            <button className="btnRestar btn_" onClick={restar}>-</button>
            <input className="inptCont" type="text" readOnly value={cont}/>
            <button className="btnSumar btn_" onClick={sumar}>+</button>
            <button className='btnComprar btn_ inptCont' onClick={()=>onClick(cont)}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default ItemCount;

