import AppHeader from '../AppHeader';
import styles from './Home.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init();
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
        <div cl7></div>
      </div>
    </div>
  );
};

export default Home;
