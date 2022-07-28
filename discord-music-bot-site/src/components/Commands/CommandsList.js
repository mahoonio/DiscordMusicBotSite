import styles from './Commands.module.css';
const CommandsList = () => {
  return (
    <div>
      <input
        placeholder="Search..."
        className={`${styles.searchinput} w-100`}
      />
    </div>
  );
};

export default CommandsList;
