import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.appfootermaincontainer}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between h-100">
          <div>
            <h3>Mylo</h3>
            <h5>The Best Music Bot For Discord.</h5>
            <div className="text-secondary">
              &copy;Mylo bot 2022 - alright reserved by yazdan zeynal zade and
              mahan mahmoodi.
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap flex-column flex-md-row justify-content-around align-items-start justify-content-md-around align-items-md-center w-100 h-100">
            <div className="my-3">
              <h5>Product</h5>
              <a className={styles.footerlink} href={'/commands'}>
                Commands
              </a>
            </div>
            <div className="my-3">
              <h5>Resources</h5>
              <a className={styles.footerlink} href={'/articles'}>
                Articles
              </a>
            </div>
            <div className="my-3">
              <h5>Business</h5>
              <a
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
