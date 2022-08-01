import styles from './Commands.module.css';

const Command = ({ cmd }) => {
  return (
    <div className={`p-3 mb-4 ${styles.eachcmdcntr}`}>
      <h3>{cmd.name}</h3>
      <div className={`${styles.cmddescsection} p-2`}>
        <h5>{cmd.description}</h5>
        <p>Aliases: {cmd.aliases}</p>
        {cmd.field !== 'Everyone' ? (
          <div className={styles.cmdpermission}>Permission: {cmd.field}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Command;
