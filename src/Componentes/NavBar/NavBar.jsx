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
                        <span>Ignite Indumentaria</span>
                    </a>
                </div>
                <div className="menuInicio">
                    <div className="ropaHombre">
                        <Link to={`/categoria/Ropa Hombre`}>
                            <FontAwesomeIcon icon={faPerson} />
                        </Link>
                    </div>
                        <div className="home">
                            <Link to="/">
                                <FontAwesomeIcon icon={faHouse} />
                            </Link>
                        </div>
                    <div className="ropaMujer">
                        <Link to={`/categoria/Ropa Mujer`}>
                            <FontAwesomeIcon icon={faPersonDress} />
                        </Link>
                    </div>
                </div>
                <div className="buscador">
                    <BuscadorNav />
                </div>
            </nav>

        </>
    );

}

export default NavBar