import React from 'react'

const About = () => {
  return (
    <div><h1>About</h1>
    <div>
      <p>Lista de Peliculas</p>
      <p>Herramientas utilizadas: React.js v17, create-react-app, react-icons, react-infinite-scroll-component, react-router-dom v6</p>
      <p>API Externa de imagenes de peliculas: https://api.themoviedb.org/3</p>
      <p>Fetch API. </p>
      <p>Debounce para el input buscar de 1s: Mientras cambia el elemento, no se realiza ninguna consulta a la API, es decir, se activará cuando se deja de teclear</p> 
      <p>.env.local (REACT_APP_): debe comenzar con REACT_APP. Reiniciar la app para que actuen los cambios</p>
      <p>Component.module.css: el nombre del archivo debe ser igual al componente  </p>
      <p>React-router-dom v6=&gt; useSearchParams: Se ocupa como el hook useState. Toma el valor y lo añade al historial de busqueda</p>
    </div>
    </div>
  )
}

export default About