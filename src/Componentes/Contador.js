import { Component } from "react";
import { useState } from "react";

const Contador = () => {

    const [cont, setCont] = useState(0)

    const saludar = () =>{
        console.log('diste click');
    }


    return ( 
        <div>
            <p>
                En ese sentido: {cont} veces.
            </p>
            <button className="btn btn-primary" onClick={() => {
                setCont(cont + 1)
            }}>
                Aumentar
            </button>
            <button className="btn btn-secondary" onClick={() => {
                setCont(cont - 1)
            }}>
                Disminuir
            </button>
        </div>
     );
}
 
export default Contador;