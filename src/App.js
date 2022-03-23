import ListaDeTareas from './components/ListaDeTareas';
import ListaDePeliculas from './components/ListaDePeliculas';

import { Routes, Route, Link, Navigate } from "react-router-dom";
// import NotFound from './components/NotFound';
import MoviesDetails from './pages/MoviesDetails';
import Home from './components/Home';
import About from './components/About';
import styles from './hojadeestilo/App.module.css';
function App() {

  return (
    <>
      <main className={styles.menuMain}>
        <nav>
          <Link className={styles.linkBase} to="/">Home</Link>
        </nav>
        <nav>
          <Link className={styles.linkBase} to="/about">Información</Link>
        </nav>
        <nav>
          <Link className={styles.linkBase} to="/listatareas">Lista de Tareas</Link>
        </nav>
        <nav>
          <Link className={styles.linkBase} to="/listapeliculas">Lista de Peliculas</Link>
        </nav>
      </main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

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
