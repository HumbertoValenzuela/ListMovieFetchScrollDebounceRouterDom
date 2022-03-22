// import movie from '../json/movie.json';
import styles from '../hojadeestilo/MoviesDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from '../utils/httpClient';
import Spinner from '../components/Spinner';

const MoviesDetails = () => {
  const {movieid} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    getMovies("/movie/" + movieid).then((data) => {
      setMovie(data);
      setIsLoading(false);
      // console.log(data);
    })
  }, [movieid])

  if (isLoading) {
    return <Spinner />
  }    
  
  // if (!movie) {
  //   return null
  // }
 
  const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path; 
  return (
    <div className={styles.detailsContainer}>
      <img 
        className={`${styles.col} ${styles.movieImage}`} 
        src={imageURL} 
        alt={movie.title} />
      <div className={`${styles.col} ${styles.detailsTexto}`}>
        <p>Title: {movie.title}</p>
        <p>
          Genres: {
            movie.genres.map(genre => genre.name).join(', ')
          }
        </p>


        <p>Description: {movie.overview}</p>
      </div>
    </div>
  )
}

export default MoviesDetails