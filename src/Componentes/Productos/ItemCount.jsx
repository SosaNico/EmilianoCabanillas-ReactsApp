import { React, useState } from "react";

const ItemCount = ({stock}) => {

    const [cont, setCont] = useState(stock)

    const sumar = () => {
        cont < stock && setCont(cont +1)
    }
    const restar = () =>{
        cont > 0 && setCont(cont- 1 )
    }

    return ( 
        <div className="d-flex">
            <button className="btn btn-primary" onClick={sumar}>+</button>
            {(cont === 0) ?  <input type="text" defaultValue={cont} className="form-control text-center is-invalid" id="inputInvalid" />
 : <input className="form-control text-center" id="readOnlyInput" type="text" defaultValue={cont} readOnly />}
            <button className="btn btn-secondary" onClick={restar}>-</button>
        </div>
    );
}

export default ItemCount;