import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase/Firebase";
import { useCartContext } from "../Context/CartContext";


const Checkout = () => {
    const { carrito, cuentaTotal, clear } = useCartContext();

    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
    });

    const [ticketOrden, setTicketOrden] = useState()

    const { Nombre, Email, Telefono } = buyer;

    const generarTicket = async (data) => {
        try {
            const coleccion = collection(db, 'Tickets')
            const ticket = await addDoc(coleccion, data)
            setTicketOrden(ticket.id)
            console.log('ticket :>> ', ticket);
            clear()
        } catch (error) {
            console.log('error', error)
        }
    }


    const manejarOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        const items = carrito.map((items) => {
            return {
                id: items.id,
                title: items.nombre,
                precio: items.precio,
                cantidad: items.cantidad,
            };
        });
        const numEnvio = Math.floor(Math.random()*9999999)
        const fecha = new Date();
        const total = cuentaTotal();
        const ticket = { buyer, items, fecha, total, numEnvio };
        console.log("ticket :>> ", ticket);
        generarTicket(ticket)
    };

    return (
        <>
            {
                !ticketOrden ? (
                    <>
                    <h2>Finalizá tu compra</h2>
                <div className='contForm'>
                <span>Ingresa tus datos</span>
                <form onSubmit={manejarSubmit}>
                    <input
                        type='text'
                        pattern='[Aa-Zz]*'
                        name='Nombre'
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={manejarOnChange}
                    />
                    <input
                        type='text'
                        placeholder='Email'
                        name='Email'
                        value={Email}
                        onChange={manejarOnChange}
                    />
                    <input
                        type='number'
                        placeholder='Telefono'
                        name='Telefono'
                        value={Telefono}
                        onChange={manejarOnChange}
                    />
                    <input type='submit' value='Terminar Compra'/>
                </form>
            </div>
            </>
                ) : (
                    <div className="msjCompra">
                        <h2>Su compra se realizo con exito</h2>
                        <span>La orden de compra es: {ticketOrden} </span>
                    </div>
                )
            }
        </>
    );
};

export default Checkout;
