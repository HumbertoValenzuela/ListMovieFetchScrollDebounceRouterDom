import { FaSpinner } from 'react-icons/fa';
import styles from '../hojadeestilo/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinnig} size={60} />
    </div>
  )
}

export default Spinner