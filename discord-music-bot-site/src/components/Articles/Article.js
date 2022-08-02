import styles from './Articles.module.css';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Article = ({ article }) => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    let seperatodTags = article.tags.replaceAll(' ', '').split(',');
    setTags(seperatodTags);
  }, []);
  const redirectToArticlePage = () => {
    navigate(`/article/${article.title.replaceAll(' ', '-')}`, {
      state: article, // not used just to be a reminder. in the destinition location
      // we will use Params
    });
  };
  return (
    <Card
      onClick={() => {
        redirectToArticlePage();
      }}
      className={`m-4 ${styles.articlecard}`}
    >
      <Card.Header className={`${styles.articlecardheader}`}>
        {article.description.par1.title}
      </Card.Header>
      <Card.Body className={`${styles.articlecardbody}`}>
        {article.description.par1.description}
      </Card.Body>
      <Card.Footer>
        <div className="mb-3">
          1 min read . {article.date.replaceAll('-', '/')}
        </div>
        <div className={styles.articletagsec}>
          {tags.map((tag) => (
            <div className={`d-inline mx-2 ${styles.articletag}`}>{tag}</div>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Article;
