import React from "react";
import Boton from "./Boton";

const BuscadorNav = ({boton}) => {
    return ( 
        <>
        <form className='d-flex'>
            <input className='form-control me-sm-2' type='text' />
            <Boton />
        </form>
        </>
     );
}

export default BuscadorNav;