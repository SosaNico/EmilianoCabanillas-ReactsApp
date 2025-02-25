import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase/Firebase";
import { useCartContext } from "../Context/CartContext";
import './form.css'


const Checkout = () => {
    const { carrito, cuentaTotal, clear } = useCartContext();

    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
    });

    const [ticketOrden, setTicketOrden] = useState()

    const { Nombre, Email, Telefono } = buyer;

    const updateStock = async (id, stock) => {
        const itemRef = doc(db, 'Items', id)
        await updateDoc(itemRef, ({stock: stock}))
    }
    const generarTicket = async (data) => {
        try {
            const coleccion = collection(db, 'Tickets')
            const ticket = await addDoc(coleccion, data)
            setTicketOrden(ticket.id)
            console.log('ticket :>> ', ticket);
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
                stock: items.stock
            };
        });
        console.log('carrito sub:>> ', carrito);
        const numEnvio = Math.floor(Math.random()*9999999)
        const fecha = new Date();
        const total = cuentaTotal();
        const ticket = { buyer, items, fecha, total, numEnvio };
        console.log("ticket :>> ", ticket);

        let stockUpdate = items[0].stock - items[0].cantidad
        updateStock(items[0].id, stockUpdate)

        generarTicket(ticket)
        clear()
    };

    return (
        <>
            {
                !ticketOrden ? (
                    <div className="contenedorFormulario">
                    <h2>Finalizá tu compra</h2>
                <div className='contForm'>
                <span>Ingresa tus datos</span>
                <form onSubmit={manejarSubmit} className='formulario'>
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
                    <input type='submit' value='Terminar Compra' className="btnFinalizar"/>
                </form>
            </div>
            </div>
                ) : (
                    <div className="msjCompra">
                        <h2>Su compra se realizo con exito</h2>
                        <span>La orden de compra es:</span>
                        <span className="numOrden">{ticketOrden}</span>
                        
                    </div>
                )
            }
        </>
    );
};

export default Checkout;
