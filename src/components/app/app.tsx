import styles from './app.module.css';

export const App = (): React.JSX.Element => {
  return (
    <div className={styles.app}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
        Стартовая
      </h1>
    </div>
  );
};

export default App;
