import { useState } from "react";

import styles from "../Main/Main.module.css";
import ellipse from "../../Images/DetailsMain/Ellipse.png";
import arrows from "../../Images/DetailsMain/Arrows.png";
import MainSend from "./MainSend";
import MainGet from "./MainGet";

const Main = () => {
  const [sendValue, setSendValue] = useState("");
  const [sendCoinPrice, setSendCoinPrice] = useState(0);
  const [getCoinPrice, setGetCoinPrice] = useState(0);
  const getConvertedValue = () => {
    if (sendValue && sendCoinPrice &&( getCoinPrice > 0)) {
      return (sendValue * sendCoinPrice) / getCoinPrice;
    }
    return 0;
  };

  console.log("Selected coin price for sending:", sendCoinPrice);
  console.log("Selected coin price for getting:", getCoinPrice);

  return (
    <div>
      <img src={ellipse} alt="Circle" className={styles.ellipse} />
      <img src={arrows} alt="Arrows" className={styles.arrows} />
      <div className={styles.border}>
        <div style={{ display: "flex" }}>
          <MainSend
            setSendValue={setSendValue}
            setSendCoinPrice={setSendCoinPrice}
          />
          <MainGet
            getValue={getConvertedValue()}
            setGetCoinPrice={setGetCoinPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
