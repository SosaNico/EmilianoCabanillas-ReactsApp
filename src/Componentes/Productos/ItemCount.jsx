import { React, useState } from "react";
import './items.css'


const ItemCount = ({stock, onClick}) => {

    const [cont, setCont] = useState(1)

    const sumar = () => {
        cont < stock && setCont(cont + 1)
    }
    const restar = () =>{
        cont > 0 && setCont(cont - 1)
    }

    return ( 
        <div className="contContador">
            <div className="contadorbtn">
                <button className="btnRestar btn_" onClick={restar}>-</button>
                <input className="inptCont" type="text" readOnly value={stock ? cont : 0}/>
                <button className="btnSumar btn_" onClick={sumar}>+</button>
            </div>
            <button disabled={stock <= 0} className={stock ? 'btnComprar btn_ inptCont' : 'btnComprar btn_ inptCont disable'} onClick={()=>onClick(cont)}>AGREGAR AL CARRITO</button>
        </div>
    );
}

export default ItemCount;

