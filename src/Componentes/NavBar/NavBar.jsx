import { Link } from 'react-router-dom'
import BuscadorNav from "./BuscadorNav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress, faHouse } from "@fortawesome/free-solid-svg-icons";
import './navBar.css'



const NavBar = () => {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <a href="/">
                        <img src="#" alt="" className="imgLogo" />
                        <span>PokeTienda</span>
                    </a>
                </div>
                <div className="menuInicio">
                    <Link to={`/categoria/Ropa Hombre`}>
                        <div className="ropaHombre">
                            <FontAwesomeIcon icon={faPerson} />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="home">
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                    </Link>
                    <Link to={`/categoria/Ropa Mujer`}>
                        <div className="ropaMujer">
                            <FontAwesomeIcon icon={faPersonDress} />
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