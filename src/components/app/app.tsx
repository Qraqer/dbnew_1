import styles from './app.module.css';

export const App = (): React.JSX.Element => {
  return (
    <div className={styles.app}>
      <h1 className={`${styles.title}`}>Стартовая</h1>
    </div>
  );
};

export default App;
