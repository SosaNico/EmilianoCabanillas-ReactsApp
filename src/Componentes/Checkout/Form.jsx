import React from 'react';

const Form = () => {
    return ( 
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
     );
}
 
export default Form;