import { Link } from 'react-router-dom';
import styles from '../hojadeestilo/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const url = "https://placehold.co/600x400";
  const imageURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    : url;

  // const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={`/listapeliculas/${movie.id}`}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageURL}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  )
}

export default MovieCard