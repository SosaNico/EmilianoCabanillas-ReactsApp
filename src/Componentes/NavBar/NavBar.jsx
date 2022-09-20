import { Link } from 'react-router-dom'
import BuscadorNav from "./BuscadorNav.jsx";
import CartWigdet from '../NavBar/CartWidget'



import './navBar.css'



const NavBar = () => {
    

    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <Link to="/">
                        <img src="../../../../img/logo_tienda.svg" alt="" className="imgLogo" />
                    </Link>
                </div>
                <div className="menuInicio">
                    <Link to={`/categoria/PrimeraGeneracion`}>
                        <div className="iconoPoke">
                            <img src='../../../../img/pokeball_icon.svg' alt='icono' />
                        </div>
                    </Link>
                    <Link to={`/categoria/EdicionEspecial`}>
                        <div className="iconoStars">
                        <img src='../../../../img/stars_icon.svg' alt='icono' />
                        </div>
                    </Link>
                </div>
                <div className="buscador">
                    <BuscadorNav />
                </div>
            </nav>
            <CartWigdet />
        </>
    );

}

export default NavBar