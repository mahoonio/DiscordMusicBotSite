import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.appfootermaincontainer}>
      <Container>
        <div className="d-flex justify-content-between h-100">
          <div>
            <h3>Mylo</h3>
            <h5>The Best Music Bot For Discord.</h5>
            <div className="text-secondary">
              &copy;Mylo bot 2022 - alright reserved by yazdan zeynal zade and
              mahan mahmoodi.
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center w-100 h-100">
            <div>
              <h5>Product</h5>
              <Link className={styles.footerlink} to={'/commands'}>
                Commands
              </Link>
            </div>
            <div>
              <h5>Resources</h5>
              <Link className={styles.footerlink} to={'/articles'}>
                Articles
              </Link>
            </div>
            <div>
              <h5>Business</h5>
              <a
                style={{ border: 'none', outline: 'none' }}
                className={styles.footerlink}
                href={'mailto:m.mahmodi1380@gmail.com'}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
