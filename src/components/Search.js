
import styles from '../hojadeestilo/Search.module.css';
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom';
// import { useQuery } from '../hook/useQuery';
// import { useEffect } from 'react';

const Search = () => {

  const [querySearch, setQuerySearch] = useSearchParams();
  const search = querySearch.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <form
      className={styles.searchContainer}
      onSubmit={handleSubmit}
    >
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          autoFocus
          placeholder="Search"
          aria-label='Search Movies'
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;      
            setQuerySearch({ search: value })
          }}
        />

        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  )
}

export default Search