import React, { useState } from 'react'
import '../hojadeestilo/pantalla.css';

const Pantalla = (props) => {
  const [nombre, setNombre] = useState('');

  const actualizarState = evento => {
    setNombre(evento.target.value);
  }

  const enviarInfo = async (evento) => {
    evento.preventDefault();
    setNombre(nombre);

    const url = 'http://localhost:4000/api/clientes/crearcliente';
    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({nombre})
      });

      const json = await respuesta.json();
      console.log(json);

    } catch (error) {
      console.log(error);
    }
    props.setActualizarState(true);
  }
console.log(nombre);

  return (
    <>
      <form
        onSubmit={enviarInfo}
        className="tarea-formulario"
      >
        <input
          type='text'
          placeholder='Ingrese su nombre'
          name='nombre'
          className='tarea-input'
          value={nombre}
          onChange={actualizarState}
        />
        <button  type="submit" className='tarea-boton'>Agregar</button>


      </form>
    </>
  )
}

export default React.memo(Pantalla);