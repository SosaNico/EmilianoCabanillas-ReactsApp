import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";


const Boton = () => {
    return ( 
        <button className='btnBuscar' type='submit' >
            <FontAwesomeIcon icon={faSearchPlus} />
        </button>
     );
}
 
export default Boton;