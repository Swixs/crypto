import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "../Main/Main.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { fetchCoins } from "../../Store/coinsSlice";
import borderLeft from "../../Images/DetailsMain/border-left.png";

const MainSend = ({ setSendValue, setSendCoinPrice }) => {

  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);

  const bitcoin = coins.find((coin) => coin.id === "bitcoin");
  const bitcoinPrice = bitcoin ? bitcoin.current_price : 0;

  const [inputValue, setInputValue] = useState("");

  const [selectedCoin, setSelectedCoin] = useState("");

  const handleChange = (event) => {
    setSelectedCoin(event.target.value);
    const selectedCoinData = coins.find(
      (coin) => coin.id === event.target.value
    );
    setSendCoinPrice(selectedCoinData ? selectedCoinData.current_price : 0);
  };

  const numbersOnly = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setInputValue(value);
      setSendValue(Number(value));
    }
  };

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  

  const selectedCoinData = coins.find((coin) => coin.id === selectedCoin);
  const selectedCoinPrice = selectedCoinData
    ? selectedCoinData.current_price
    : 0;

  return (
    <div className={styles.change}>
      <img
        src={borderLeft}
        alt="border-left"
        className={styles.borderLeft}
      ></img>
      <div className={styles.textSend}>You send</div>
      <input
        type="text"
        placeholder="00.00"
        className={styles.inputLeft}
        value={inputValue}
        onChange={numbersOnly}
      />
      <div className={styles.dropmenu}>
        <FormControl fullWidth style={{ border: "none" }}>
          <Select
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={selectedCoin}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => {
              if (!selected) {
                return (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                      alt="Bitcoin"
                      width="20"
                      height="20"
                      style={{ marginRight: "10px" }}
                    />
                    BTC
                  </div>
                );
              }
              const coin = coins.find((coin) => coin.id === selected);
              return (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width="30"
                    height="30"
                    style={{ marginRight: "10px" }}
                  />
                  <div className={styles.textCoin}>
                    {coin.symbol.toUpperCase()}
                  </div>
                </div>
              );
            }}
          >
            {coins.map((coin) => (
              <MenuItem key={coin.id} value={coin.id}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width="20"
                    height="20"
                    style={{ marginRight: "10px" }}
                  />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles.textPrice}>
        {selectedCoinData ? (
          <div style={{ marginTop: 3 }}>Price: {selectedCoinPrice} $</div>
        ) : (
          <div style={{ marginTop: 3 }}>Price: {bitcoinPrice} $</div>
        )}
      </div>
    </div>
  );
};

export default MainSend;
