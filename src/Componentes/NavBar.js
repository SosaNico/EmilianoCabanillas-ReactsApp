import { Component } from "react"
import icon from "../img/pokeball.png"


export default class NavBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src={icon} alt='' className='img-icon' />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarColor02'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>PokeMerch</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Nosotros</a>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <input className='form-control me-sm-2' type='text' />
                            <button
                                className='btn btn-secondary my-2 my-sm-0'
                                type='submit'>
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}