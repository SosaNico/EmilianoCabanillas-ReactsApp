import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ title, video, image, id }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='cardProd'>
                <div className='contTitulo'>
                    <h3>{title}</h3>
                    <span>ID: {id}</span>
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

{
    /* <div className='card text-center p-1 bg-white'>
    <img src={image} alt='' />
    <div className='card-body'>
        <h4 className='card-title text-black fs-6'>{title}</h4>
        <h5 className='card-title text-black'>${price}</h5>
    </div>
    
        <button className='btn btn-outline-secondary text-dark'>ver más</button>
    
</div>; */
}
