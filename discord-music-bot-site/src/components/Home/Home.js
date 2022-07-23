import AppHeader from '../AppHeader';
import styles from './Home.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import sec1pic from '../../assets/sec1pic.png';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: '600' });
    Aos.refresh();
  }, []);
  return (
    <div>
      <div className={styles.titlecontent}>
        <h1 style={{ color: 'white', fontSize: '72px' }}>
          The Best Music Bot For Discord.
        </h1>
        <p style={{ fontSize: '30px' }} className="text-secondary">
          You wont need anything else,ever!
        </p>
      </div>
      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} lg={6}>
                <img
                  src={sec1pic}
                  alt="web control pannel"
                  style={{ width: '800px' }}
                />
              </Col>
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
                lg={{ order: 'last' }}
              >
                <div className={`${styles.sectionsdesc}`}>
                  <h3>Easy to use control pannel on web!</h3>
                  <p>
                    With Mylo's extensive web dashboard you're able to
                    comfortably customize Mylo on the web without having to
                    remember any commands or syntaxes!
                  </p>
                  <Button>Customize now!</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={`${styles.section2}`}>
        <div className={`${styles.sec2content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} lg={6}>
                <img
                  src={sec1pic}
                  alt="web control pannel"
                  style={{ width: '800px' }}
                />
              </Col>
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
                lg={{ order: 'last' }}
              >
                <div className={`${styles.sectionsdesc}`}>
                  <h3>Easy to use control pannel on web!</h3>
                  <p>
                    With Mylo's extensive web dashboard you're able to
                    comfortably customize Mylo on the web without having to
                    remember any commands or syntaxes!
                  </p>
                  <Button>Customize now!</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
