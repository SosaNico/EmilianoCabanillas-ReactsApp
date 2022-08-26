import React, { useEffect } from 'react';
import CardsContainer from './CardsContainer';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import portadaDBS from "../img/portadas/Dragon Ball Super SuperHero.jpg"
import portadaPredator from "../img/portadas/Predator La presa.jpg"
import portadaThor from "../img/portadas/Thor Love and Thunder.jpg"
import portadaJurassic from "../img/portadas/Jurassic World Dominion.jpg"

const PELICULAS = [
    {
        id: 1,
        Titulo: "Dragon Ball Super: Super Hero",
        Titulo_Original: "ドラゴンボール超 スーパーヒーロー",
        sinopsis: "Son Goku destruyó en su momento al Ejército Red Ribbon. Ahora, ciertos individuos han decidido continuar con su legado y han creado a los androides definitivos: Gamma 1 y Gamma 2. Estos dos androides se autoproclaman \"superhéroes\" y deciden atacar a Piccolo y a Gohan. ¿Cuál es el objetivo del Nuevo Ejército Red Ribbon?  Ante un peligro inminente, ¡llega el momento del despertar del Superhéroe!",
        año: "2022-11-06",
        genero: "Animada",
        poster: portadaDBS,
        precio: "$399,99"
    },
    {
        id: 2,
        Titulo: "Thor: Amor y Trueno",
        Titulo_Original: "Thor: Love and Thunder",
        sinopsis: "Cuarta película sobre \"Thor\" del MCU, en la que el Dios del trueno contará con Lady Thor como acompañante, personaje que interpretará Natalie Portman.",
        año: "2022-07-06",
        genero: "acción",
        poster: portadaThor,
        precio: "$229,99"
    },
    {
        id: 3,
        Titulo: "Predator: La Presa",
        Titulo_Original: "Prey",
        sinopsis: "Ambientada hace 300 años en la Nación Comanche. Naru es una joven guerrera, feroz y altamente hábil, que se crió a la sombra de algunos de los cazadores más legendarios que deambulan por las Grandes Llanuras. Cuando el peligro amenaza su campamento, se dispone a proteger a su gente. La presa a la que acecha y, en última instancia, se enfrenta, resulta ser un depredador alienígena evolucionado con un arsenal técnicamente avanzado, lo que deriva en un enfrentamiento cruel y aterrador entre los dos adversarios.",
        año: "2022-08-02",
        genero: "acción",
        poster: portadaPredator,
        precio: "$279,99"
    },
    {
        id: 4,
        Titulo: "Jurassic World: Dominion",
        Titulo_Original: "Jurassic World: Dominion",
        sinopsis: "Cuatro años después de la destrucción de Isla Nublar, los dinosaurios conviven – y cazan – con los seres humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y decidirá, de una vez por todas, si los seres humanos seguirán en la cúspide de los depredadores en un planeta que comparten con los animales más temibles de la creación.",
        año: "2022-06-01",
        genero: "acción",
        poster: portadaJurassic,
        precio: "$219,99"
    }
]

const getData = (status) => {
    return new Promise ((res, rej) =>{
        if(status === 200){
            res(PELICULAS)
        }else{
            rej('Problemas en la conexion')
        }
    })
}

const Cards = ({saludo}) => {
    let status = 200
    const [peliculas, setPeliculas ] = useState([])
    useEffect(()=>{
        getData(status)
        .then(peliculasData =>{
            const dataPeliculasJSX = peliculasData.map(DataPelis =>(
                <div className="imgPoster col-md-3 d-flex flex-md-column" key={DataPelis.id}>
                    <CardsContainer titulo={DataPelis.Titulo} tituloOriginal={DataPelis.Titulo_Original} sinopsis={DataPelis.sinopsis} año={DataPelis.año} genero={DataPelis.genero} precio={DataPelis.precio} poster={DataPelis.poster}/>
                    <button className="btn btn-outline-primary bg-dark m-auto w-50" onClick={() => {setCont(cont + 1)}}>Alquilar</button>    
                </div>
            ))
            setPeliculas(dataPeliculasJSX)
            console.log(dataPeliculasJSX);
        }).catch(error =>{
            console.error(error);
        })
    }, [])
    

    const [cont, setCont] = useState(0)
    return (
        <>
         <h1 className='text-center text-black  p-2'>{saludo}</h1>
            <div className="container d-flex justify-content-center align-items-center ">
                <div className="row">
                    {peliculas}
                </div>
            </div>
                <ImgCarrito cont={cont}/>
        </>
    );
}

export default Cards;
const ImgCarrito = ({cont}) => {
    return (
        <div className="imgCarrito">
            <span>{cont}</span>
            <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    );
}