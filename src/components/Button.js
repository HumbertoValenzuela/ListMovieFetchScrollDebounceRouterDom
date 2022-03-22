import React from 'react';
import '../hojadeestilo/Boton.css';

const Button = (props) => {
  const estaVacio = valor => {
    return (valor === 'Agregar') ;
  };

  return (
    
      <button
        className={`boton-contendor ${estaVacio(props.children) ? 'boton-contendor-agregar' : 'boton-contendor-eliminar'}`}
      >
        {props.children}
      </button>
   
  )
};

export default Button