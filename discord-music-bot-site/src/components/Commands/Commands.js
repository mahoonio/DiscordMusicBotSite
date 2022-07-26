import styles from './Commands.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Commands = () => {
  const [allCommands, setAllCommands] = useState([]);
  useEffect(() => {
    axios
      .get('https://mylo-website.herokuapp.com/api/commands/', {})
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.error('error: ', err);
      });
  }, []);
  return <div className={`${styles.commandscnt}`}></div>;
};

export default Commands;
