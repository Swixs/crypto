import styles from "../Main/Main.module.css";

import imgFirst from "../../Images/Security/First.png";
import imgSecond from "../../Images/Security/Second.png";
import imgThird from "../../Images/Security/Third.png";

const MainSecurity = () => {
  return (
    <div className={styles.borderSecurity}>
      <div className={styles.titleSecurity}>
        Top-notch Security: Leading Protocols and Two-Factor Authentication
      </div>

      <div className={styles.block}>
        <div className={styles.blackBorder}>
          <div>
            <img src={imgFirst} alt="first" />

            <div className={styles.titleBlockBlack}>Deep Liquidity</div>
            <div className={styles.subtitleBlockBlack}>
              We offer high liquidity for deals, allowing deals from $50,000 to
              $1+ million at the best prices and with minimal impact on
              commissions.
            </div>
          </div>
        </div>
        <div className={styles.whiteBorder}>
          <div>
            <img src={imgSecond} alt="Second" style={{ marginBottom: 22 }} />

            <div className={styles.titleBlock}>Secure Transactions</div>
            <div className={styles.subtitleBlock}>
              We use advanced encryption and strict security protocols to keep
              your funds and personal data private and secure.
            </div>
          </div>
        </div>
        <div className={styles.whiteBorder}>
          <div>
            <img
              src={imgThird}
              alt="Third"
              style={{ marginBottom: 32, marginTop: 30, marginLeft: 35 }}
              width={300}
            />

            <div className={styles.titleBlock}>24/7 support</div>
            <div className={styles.subtitleBlock}>
              Polite technical support in Telegram is ready to help you with any
              questions you may have.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSecurity;
