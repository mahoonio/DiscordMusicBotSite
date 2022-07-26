import styles from './Commands.module.css';
import { useState, useEffect } from 'react';
const Commands = () => {
  const [allCommands, setAllCommands] = useState([]);
  useEffect(() => {}, []);
  return <div className={`${styles.commandscnt}`}></div>;
};

export default Commands;
