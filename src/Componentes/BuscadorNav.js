import React from "react";

const BuscadorNav = ({contBuscar}) => {
    return ( 
        <>
        <form className='d-flex'>
            <input className='form-control me-sm-2' type='text' />
            <button
                className='btn btn-secondary my-2 my-sm-0'
                type='submit'
                placeholder={contBuscar}>
                Buscar
            </button>
        </form>
        </>
     );
}

export default BuscadorNav;