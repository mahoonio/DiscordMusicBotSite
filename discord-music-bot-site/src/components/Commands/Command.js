import styles from './Commands.module.css';

const Command = () => {
  return (
    <div className={`p-3 ${styles.eachcmdcntr}`}>
      <h3>.help</h3>
      <div className={`${styles.cmddescsection} p-2`}>
        <h5>shows the help menu</h5>
        <p>Aliases: h</p>
      </div>
    </div>
  );
};

export default Command;
