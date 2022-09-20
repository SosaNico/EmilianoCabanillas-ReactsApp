import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return ( 
        <>
        <div className="contHome">
            <img className='imgHome' src='../../../../img/imgHome.jpg' alt="imagen de bienvenida" />
            <div className="contBtnIngreso">
                <Link to='/categoria'>
                    <button className='btnIngreso'>INGRESÁ</button>
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default Home;