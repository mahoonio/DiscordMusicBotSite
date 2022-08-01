import AppHeader from '../AppHeader';
import styles from './Articles.module.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://mylo-website.herokuapp.com/api/articles/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAllArticles(res.data);
        console.log('articles : ', res.data);
      })
      .catch((err) => {
        toast.error(
          'there was a problem connecting to the server.if you have internet restrictions please use VPN',
          {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  }, []);

  return <div className={styles.articlescnt}></div>;
};

export default Articles;
