import styles from "../Main/Main.module.css";

const MainSupporters = ({ logos }) => {
  return (
    <div>
      <div>
        <div className={styles.title}>
          Innovative Platform Offering Fast and Reliable Exchange Solutions
        </div>
        <div className={styles.subtitle}>
          Our service helps facilitate exchanges safely and quickly.
        </div>
      </div>

      <div className={styles.textLogos}>Supported by many companies:</div>
      <div className={styles.brandRow}>
        {logos.map((logo) => (
          <div className={styles.brand}>
            <img src={logo} alt="bestchange" className={styles.logoImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSupporters;
