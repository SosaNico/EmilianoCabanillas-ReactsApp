import { Link } from 'react-router-dom'
import BuscadorNav from "./BuscadorNav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { ico_pokeball } from '../../../img/pokeball_ico.svg'
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
                            <img src='../../../../img/pokeball_icon.svg' />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="home">
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                    </Link>
                    <Link to={`/categoria/EdicionEspecial`}>
                        <div className="iconoStars">
                        <img src='../../../../img/stars_icon.svg' />
                        </div>
                    </Link>
                </div>
                <div className="buscador">
                    <BuscadorNav />
                </div>
            </nav>

        </>
    );

}

export default NavBar