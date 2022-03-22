// import movies from '../json/movies.json';
import MovieCard from './MovieCard';
import styles from '../hojadeestilo/MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { getMovies } from '../utils/httpClient';
import Spinner from './Spinner';
// import { useLocation } from 'react-router-dom';
// import { useQuery } from '../hook/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';
import Empty from './Empty';



const MoviesGrid = ({search}) => {
  
  // const location = useLocation();
  // console.log(location.search);

  const [guardarMovies, setGuardarMovies] = useState([]);
  const [cargarMas, setCargarMas] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  // infinitescroll
  const [pagina, setPagina] = useState(1);

  // const query = useQuery();
  // const search = query.get('search');
  // console.log(query);
  // console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search
      ? "/search/movie?query=" + search + "&page=" + pagina
      : "/discover/movie?page=" + pagina;

    getMovies(searchURL).then((data) => {
      // setGuardarMovies(data.results);//Reemplaza el contenido del array
      setGuardarMovies((prevMovies) => prevMovies.concat(data.results));
      setCargarMas(data.page < data.total_pages);
      setIsLoading(false);
    });

  }, [search, pagina])

  // Loading reemplaza el contenido por lo que la página sube al principio
  // InfiniteScroll tiene la propiedad loader que es el componente que se muestra mientras se carga
  // Queda con problemas (se mueve) de css agregar margin 30px
  // if (isLoading) {
  //   return <Spinner />
  // }
  // console.log('re-render')

  if(!isLoading && guardarMovies.length === 0) {
    return <Empty />
  }
  return (
    <InfiniteScroll
      dataLength={guardarMovies.length} //This is important field to render the next data
      next={() => { setPagina((prevPage) => prevPage + 1)}}
      hasMore={cargarMas}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {
          guardarMovies.map(movie =>
            <MovieCard key={movie.id} movie={movie} />
          )
        }
      </ul>
    </InfiniteScroll>
  )
}

export default MoviesGrid