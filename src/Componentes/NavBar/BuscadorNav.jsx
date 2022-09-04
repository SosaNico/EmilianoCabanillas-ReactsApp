import React from "react";
import Boton from "./Boton";

const BuscadorNav = ({boton}) => {
    return ( 
        <>
        <form className='FormBuscador'>
            <input className='inpBuscar' type='text' />
            <Boton />
        </form>
        </>
     );
}

export default BuscadorNav;