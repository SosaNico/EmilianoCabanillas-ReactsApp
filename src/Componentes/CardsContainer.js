import React from "react";
import { useState } from "react";




const CardsContainer = ({titulo, tituloOriginal, año, sinopsis, genero, precio, poster}) => {

    
    
    return ( 
        <>
        <div className="card text-center m-1 p-1">
            <img src={poster} alt="" />
            <div className="sinopsis card-text">
                <span>Sinopsis</span>
                <p>{sinopsis}</p>
            </div>
            <div className="card-body">
                <h4 className="card-title text-white">{titulo}</h4>
                <p className="card-title">{tituloOriginal}</p>
                <p className="card-text">Año: {año}</p>
                <p className="card-text">Genero: {genero}</p>
                <h5 className="card-title text-white">Precio: {precio}</h5>
            </div>
            
        </div>
        
        </>
    );
}

export default CardsContainer;

