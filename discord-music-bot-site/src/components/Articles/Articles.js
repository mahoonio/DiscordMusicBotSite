import AppHeader from '../AppHeader';
import styles from './Articles.module.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Card, Container, card } from 'react-bootstrap';
import Article from './Article';

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

  return (
    <div className={styles.articlescnt}>
      <ToastContainer />
      <Container>
        <h1 style={{ color: 'white', fontSize: '72px' }}>All Articles</h1>
        <div className="d-flex justify-content-around justify-content-lg-start flex-wrap">
          {allArticles.map((article, idx) => (
            <Article key={idx} article={article} />
          ))}

          <Card className={`m-4 ${styles.articlecard}`}>
            <Card.Header className={`${styles.articlecardheader}`}>
              how to do folan
            </Card.Header>
            <Card.Body className={`${styles.articlecardbody}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quaerat. Ullam enim minus officia fuga vitae. Consequuntur, quos
              vitae totam sint voluptate asperiores, officia doloribus, sapiente
              culpa sunt aut nulla
            </Card.Body>
          </Card>
          <Card className={`m-4 ${styles.articlecard}`}>
            <Card.Header className={`${styles.articlecardheader}`}>
              how to do folan
            </Card.Header>
            <Card.Body className={`${styles.articlecardbody}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quaerat. Ullam enim minus officia fuga vitae. Consequuntur, quos
              vitae totam sint voluptate asperiores, officia doloribus, sapiente
              culpa sunt aut nulla
            </Card.Body>
          </Card>
          <Card className={`m-4 ${styles.articlecard}`}>
            <Card.Header className={`${styles.articlecardheader}`}>
              how to do folan
            </Card.Header>
            <Card.Body className={`${styles.articlecardbody}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              quaerat. Ullam enim minus officia fuga vitae. Consequuntur, quos
              vitae totam sint voluptate asperiores, officia doloribus, sapiente
              culpa sunt aut nulla
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Articles;
