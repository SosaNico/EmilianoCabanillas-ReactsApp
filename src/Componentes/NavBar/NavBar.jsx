import BuscadorNav from "./BuscadorNav.jsx";
import CartWidget from "./CartWidget.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress, faHouse } from "@fortawesome/free-solid-svg-icons";
import './navBar.css'



const NavBar = () => {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <a href="#">
                        <img src="#" alt="" className="imgLogo" />
                        <span>Ignite Indumentaria</span>
                    </a>
                </div>
                <div className="menuInicio">
                    <div className="ropaHombre">
                        <a href="#">
                            <FontAwesomeIcon icon={faPerson} />
                        </a>
                    </div>
                    <div className="home">
                        <a href="#">
                            <FontAwesomeIcon icon={faHouse} />
                        </a>
                    </div>
                    <div className="ropaMujer">
                        <a href="#">
                            <FontAwesomeIcon icon={faPersonDress} />
                        </a>
                    </div>
                </div>
                <div className="buscador">
                    <BuscadorNav/>
                </div>
            </nav>

        </>
    );

}

export default NavBar