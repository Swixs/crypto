import { useSelector } from "react-redux";
import styles from "../Main/Main.module.css";

const MainReservers = () => {
  const coins = useSelector((state) => state.coins.coins);
  const status = useSelector((state) => state.coins.status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading coins</div>;
  }

  return (
    <div>
      <div className={styles.title} style={{ marginTop: 100 }}>
        Currency reserves
      </div>

      <div className={styles.subtitle} style={{ maxWidth: 700 }}>
        We always try to keep reserves at the highest level, especially for
        highly liquid assets. If we do not have the volume you need in the
        currency you require, please contact us!
      </div>
      <div className={styles.tableGrid}>
        {coins.slice(0, 9).map((coin) => (
          <div key={coin.id} className={styles.card}>
            <div className={styles.cardContent}>
              <img
                src={coin.image}
                alt={coin.name}
                className={styles.coinImage}
              />
              <div className={styles.coinDetails}>
                <div className={styles.coinName}>{coin.name}</div>
                <div className={styles.coinPrice}>{coin.current_price} $</div>
              </div>
              <div className={styles.coinSymbol}>
                {coin.symbol.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainReservers;
