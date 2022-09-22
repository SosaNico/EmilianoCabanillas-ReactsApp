import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ nombre, image, id }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='cardProd'>
                <div className='contTitulo'>
                    <h3>{nombre}</h3>
                </div>
                <div className='contImg'>
                    <img src={image} alt='' />
                </div>
                <div className='contenedorbtn'>
                    <Link to={`/detalles/${id}`}>
                        <div className='contBtn'>
                            <button className='btnDetalles'>DETALLES</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
