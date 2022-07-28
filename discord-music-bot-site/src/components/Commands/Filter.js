import { Col, Container, Row } from 'react-bootstrap';
import styles from './Commands.module.css';

const Filter = ({ filter, setFilter, changeFilter }) => {
  return (
    <div className={`${styles.filterscnt}  d-flex flex-md-column `}>
      <div
        onClick={() => changeFilter('everyone')}
        className={`${styles.filterdiv} ${
          filter === 'everyone' && styles.filteractive
        }`}
      >
        Everyone
      </div>
      <div
        onClick={() => changeFilter('dj')}
        className={`${styles.filterdiv} ${
          filter === 'dj' && styles.filteractive
        }`}
      >
        DJ
      </div>
      <div
        onClick={() => changeFilter('admin')}
        className={`${styles.filterdiv} ${
          filter === 'admin' && styles.filteractive
        }`}
      >
        Admin
      </div>
      <div
        onClick={() => changeFilter('premium')}
        className={`${styles.filterdiv} ${
          filter === 'premium' && styles.filteractive
        }`}
      >
        Premium
      </div>
    </div>
  );
};

export default Filter;
