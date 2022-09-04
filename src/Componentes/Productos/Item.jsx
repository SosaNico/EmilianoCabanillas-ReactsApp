import React from "react";



const Item = ({title, price, image}) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card text-center p-1 bg-white">
                    <img src={image} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title text-black fs-6">{title}</h4>
                        <h5 className="card-title text-black">${price}</h5>
                    </div>
                    <button className="btn btn-outline-secondary text-dark">ver más</button>
            </div>
        </div>
    );
}

export default Item;

