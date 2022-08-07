import AppHeader from '../AppHeader';
import styles from './Home.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import sec1pic from '../../assets/sec1pic.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CgScrollV } from 'react-icons/cg';
import invitePic from '../../assets/invitePic.png';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: '1200' });
    Aos.refresh();
  }, []);

  return (
    <div>
      <div className={styles.titlecontent}>
        <div>
          <h1 style={{ color: 'white', fontSize: '72px' }}>
            The Best Music Bot For Discord.
          </h1>
          <p style={{ fontSize: '36px' }} className="text-secondary">
            You wont need anything else,ever!
          </p>
        </div>
      </div>

      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} lg={{ span: 6, offset: 1 }}>
                <img
                  src={sec1pic}
                  alt="web control pannel"
                  style={{ width: '900px' }}
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
      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
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
              <Col xs={12} lg={6}>
                <img
                  src={sec1pic}
                  alt="web control pannel"
                  style={{ width: '800px' }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <div className="d-flex flex-column justify-content-center">
              <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                  {' '}
                  <img
                    src={invitePic}
                    alt="invite pic"
                    style={{ width: '500px' }}
                  />
                  <div className={`${styles.sectionsdesc}`}>
                    <h1 style={{ fontSize: '55px', fontWeight: 700 }}>
                      Ready to Get Started?
                    </h1>
                    <p style={{ fontSize: '26px' }} className="text-center">
                      Invite Mylo from your dashboard now and start enjoying the
                      best features available on Discord!
                    </p>
                    <Button size="lg" className="mx-auto mb-3">
                      Customize now!
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
