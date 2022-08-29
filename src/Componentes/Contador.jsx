import { React, useState } from "react";

const Contador = ({stock}) => {

    const [cont, setCont] = useState(stock)

    const sumar = () => {
        (stock <= cont) ? console.log('No caben mas peliculas') : setCont(cont + 1)
    }
    const restar = () =>{
        (cont == 0) ? console.log('No se puede disminuir mas') : setCont(cont - 1)
    }

    return ( 
        <div>
            <p>Peliculas Disponibles: {cont}</p>
            <button className="btn btn-primary" onClick={sumar}>Aumentar</button>
            <button className="btn btn-secondary" onClick={restar}>
                Disminuir
            </button>
        </div>
    );
}

export default Contador;