import { useState, uesEffect, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SingleArticle.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
const SingleArticlePage = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [hintText, setHintText] = useState('Loading...');
  const { articleName } = useParams();
  const [tags, setTags] = useState([]);

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
        return res;
      })
      .then((res) => {
        let basedOnParamsArticle = res.data.find(
          (art) => art.title.replace(' ', '-') === articleName
        );
        if (basedOnParamsArticle === undefined) {
          setHintText('Error 404 not found!');
          return;
        } else {
          setArticle(basedOnParamsArticle);
        }
      })
      .then(() => {
        if (article) {
          let seperatodTags = article.tags.replaceAll(' ', '').split(',');
          setTags(seperatodTags);
        }
      })

      .catch((err) => {
        console.log('error : ', err);
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
    <div className={styles.mainCnt}>
      <ToastContainer />
      <Container>
        {!article ? (
          <div
            className="mx-auto text-center"
            style={{ color: 'white', fontSize: '24px ' }}
          >
            {hintText}
          </div>
        ) : (
          <div>
            {' '}
            <div className={styles.maintitlesec}>
              <h1 className={`mb-4 ${styles.maintitle}`}>{article.title}</h1>
              <div className={styles.articletagsec}>
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`d-inline mx-2 ${styles.articletag}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <h2 className={`${styles.maintitle}`}>
              {article.description.par1.title}
            </h2>
            <p className={`${styles.paragraph}`}>
              {article.description.par1.description}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SingleArticlePage;
