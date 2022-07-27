import styles from './Commands.module.css';
import { useState, useEffect } from 'react';
import commandMock from '../../mock/commandMock';
import axios from 'axios';
const Commands = () => {
  const [allCommands, setAllCommands] = useState([]);
  useEffect(() => {
    axios
      .get('https://mylo-website.herokuapp.com/api/commands/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.error('error: ', err);
      });
    setAllCommands(commandMock);
  }, []);
  return (
    <div className={`${styles.commandscnt}`}>
      {commandMock && <div style={{ color: 'white' }}>hello</div>}
    </div>
  );
};

export default Commands;
