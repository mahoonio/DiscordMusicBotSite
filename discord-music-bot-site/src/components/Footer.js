import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.appfootermaincontainer}>
      <Container>
        <div className="d-flex justify-content-between h-100">
          <div>
            <h3>Mylo</h3>
            <h5>The Best Music Bot For Discord.</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center"></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
