import { useState } from "react";

import Button from "@mui/material/Button";

import styles from "../Main/Main.module.css";
import MainSend from "./MainSend";
import MainGet from "./MainGet";
import bestChange from "../../Images/Logos/bestchange.png";
import binance from "../../Images/Logos/binance.png";
import bitcoin from "../../Images/Logos/bitcoin.png";
import bitmex from "../../Images/Logos/bitmex.png";
import coinbase from "../../Images/Logos/coinbase.png";
import tether from "../../Images/Logos/tether.png";
import MainSupporters from "./MainSupporters";
import MainSecurity from "./MainSecurity";
import MainReservers from "./MainReservers";
import MainReviews from "./MainReviews";
import MainArticles from "./MainArticles";

const Main = () => {
  const logos = [bestChange, binance, bitcoin, bitmex, coinbase, tether];

  const [sendValue, setSendValue] = useState("");
  const [sendCoinPrice, setSendCoinPrice] = useState(0);
  const [getCoinPrice, setGetCoinPrice] = useState(0);
  const getConvertedValue = () => {
    if (sendValue && sendCoinPrice && getCoinPrice > 0) {
      return (sendValue * sendCoinPrice) / getCoinPrice;
    }
    return 0;
  };

  return (
    <div>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            href="/exchange"
            variant="text"
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "500px",
              height: "60px",
              borderRadius: "15px",
              margin: "0 auto",
            }}
          >
            Make the Exchange
          </Button>
        </div>

        <MainSupporters logos={logos} />
        <MainSecurity />
        <MainReservers />
        <MainReviews />
        <MainArticles />
      </div>
    </div>
  );
};

export default Main;
