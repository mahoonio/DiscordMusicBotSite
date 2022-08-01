import { Col, Container, Row } from 'react-bootstrap';
import styles from './Commands.module.css';

const Filter = ({ filter, setFilter, changeFilter }) => {
  return (
    <div className={`${styles.filterscnt}  d-flex flex-md-column mb-3`}>
      <div
        onClick={() => changeFilter('All')}
        className={`${styles.filterdiv} ${
          filter === 'All' && styles.filteractive
        }`}
      >
        All
      </div>
      <div
        onClick={() => changeFilter('Everyone')}
        className={`${styles.filterdiv} ${
          filter === 'Everyone' && styles.filteractive
        }`}
      >
        Everyone
      </div>
      <div
        onClick={() => changeFilter('DJ')}
        className={`${styles.filterdiv} ${
          filter === 'DJ' && styles.filteractive
        }`}
      >
        DJ
      </div>
      <div
        onClick={() => changeFilter('Admin')}
        className={`${styles.filterdiv} ${
          filter === 'Admin' && styles.filteractive
        }`}
      >
        Admin
      </div>
      <div
        onClick={() => changeFilter('Premium')}
        className={`${styles.filterdiv} ${
          filter === 'Premium' && styles.filteractive
        }`}
      >
        Premium
      </div>
    </div>
  );
};

export default Filter;
