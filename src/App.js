import ListaDeTareas from './components/ListaDeTareas';
import ListaDePeliculas from './components/ListaDePeliculas';

import { Routes, Route, Link, Navigate } from "react-router-dom";
// import NotFound from './components/NotFound';
import MoviesDetails from './pages/MoviesDetails';
function App() {

  return (
    <>

      {/* <ListaDeTareas /> */}
      {/* <ListaDePeliculas /> */}
      <nav>
        <Link to="/listatareas">Lista de Tareas</Link>
      </nav>
      <nav>
        <Link to="/listapeliculas">Lista de Peliculas</Link>
      </nav>

      <Routes>
        <Route path="/listatareas" element={<ListaDeTareas />} />
        <Route path="listapeliculas" element={<ListaDePeliculas />} />
        <Route path="/listapeliculas/:movieid" element={<MoviesDetails />} />
        <Route path="*" element={<Navigate replace to="/listapeliculas" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
