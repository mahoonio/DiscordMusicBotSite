import styles from './Commands.module.css';
import Command from './Command';
const CommandsList = ({ shownCommands }) => {
  return (
    <div>
      {shownCommands.map((cmd, idx) => (
        <Command cmd={cmd} key={idx} />
      ))}
    </div>
  );
};

export default CommandsList;
