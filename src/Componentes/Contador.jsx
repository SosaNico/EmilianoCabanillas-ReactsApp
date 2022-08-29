import { React, useState } from "react";

const Contador = ({cant}) => {

    const [cont, setCont] = useState(cant)


    return ( 
        <div>
            <p>Peliculas Disponibles: {cont}</p>
            <button className="btn btn-primary" onClick={() =>{setCont(cont + 1)}}>Aumentar</button>
            <button className="btn btn-secondary" onClick={()=>{
                (cont == 0) ? console.log('No se puede disminuir mas') : setCont(cont - 1)
            }}>
                Disminuir
            </button>
        </div>
    );
}

export default Contador;