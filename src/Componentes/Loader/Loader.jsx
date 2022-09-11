import React from 'react';
import './loader.css'

const Loader = () => {
    return ( 
        <>
            <div className='contenedor-loader'>
                <h2>Por favor, espere...</h2>
                <img src="../img/pokeball_loader.png" className="pokeball_loader"/>
            </div>
        </>
     );
}
 
export default Loader;