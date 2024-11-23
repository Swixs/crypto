import styles from "../Main/Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.border}>
        <div style={{ display: "flex" }}>
          <div className={styles.change}>
            <div className={styles.counter}></div>
          </div>
          <div className={styles.change}>
            <div className={styles.counter}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
