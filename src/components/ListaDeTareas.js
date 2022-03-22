
import React, { useEffect, useState } from 'react';
import Pantalla from './Pantalla';
import '../hojadeestilo/listadetareas.css';

const ListaDeTareas = () => {
  const [first, setFirst] = useState([]);
  const [actualizarState, setActualizarState] = useState(true);

  useEffect(() => {

    if (actualizarState === true) {
      const consultarAPI = async () => {
        const url = 'http://localhost:4000/api/clientes';
        try {
          const resultado = await fetch(url);
          const mostrar = await resultado.json();
          setFirst(mostrar);

          // console.log(resultado);
        } catch (error) {
          console.log(error);
        }
      }
      
      consultarAPI();
      setActualizarState(false);
    }
    
  }, [actualizarState]);

  console.log(first);

  const eliminartarea = async (id) => {

    const url = `http://localhost:4000/api/clientes/deletecliente`;
    try {
      const respuesta = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      const json = await respuesta.json();
      console.log(json)

    } catch (error) {
      console.log(error);
    }
    setActualizarState(true);

  }



  return (
    <>
      <Pantalla setActualizarState={setActualizarState}/>
      <div className="tareas-listas-contenedor">
        {
          first?.map(item => (
            <ul key={item.id} className="tareas-lista-contenedor-ul">
              <li
                className="tareas-lista-contenedor-li"
              >
                {item.nombre}
                <button
                  className='tarea-boton'
                  onClick={() => { eliminartarea(item.id) }}
                >Eliminar</button>
              </li>
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default React.memo(ListaDeTareas)