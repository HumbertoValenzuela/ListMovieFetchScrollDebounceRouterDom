import React from 'react';
import MoviesGrid from './MoviesGrid';

import styles from '../hojadeestilo/ListaDePeliculas.module.css';
import Search from './Search';
import { useQuery } from '../hook/useQuery';
import { useDebounce } from '../hook/useDebounce';

const ListaDePeliculas = () => {
  
  const query = useQuery();
  const search = query.get('search');
  const debounceSearch = useDebounce(search, 1000);
  return (
    <div className={styles.fondo}>
      <header>
        <h1 className={styles.title}>Lista de Peliculas</h1>
      </header>
      <main>
        <Search />
        {/* <MoviesGrid key={search} search={search} /> */}
        <MoviesGrid key={debounceSearch} search={debounceSearch} />
      </main>
    </div>
  )
}

export default ListaDePeliculas;