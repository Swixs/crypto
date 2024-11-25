import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "../Main/Main.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { fetchCoins } from "../../Store/coinsSlice";
import borderRight from "../../Images/DetailsMain/border-right.png";

const MainGet = ({ getValue, setGetCoinPrice }) => {
  const dispatch = useDispatch();
  const [selectedCoin, setSelectedCoin] = useState("");
  const { coins } = useSelector((state) => state.coins);

  const tether = coins.find((coin) => coin.id === "tether");
  const tetherPrice = tether ? tether.current_price : 0;
  

  const handleGetCoinSelect = (coinId) => {
    setSelectedCoin(coinId);
    const selectedCoin = coins.find((coin) => coin.id === coinId);
    console.log("Selected coin in MainGet:", selectedCoin);
    setGetCoinPrice(selectedCoin ? selectedCoin.current_price : 0);
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
        src={borderRight}
        alt="border-right"
        className={styles.borderRight}
      ></img>
      <div className={styles.textSend}>You get</div>
      <input
        type="text"
        placeholder="00.00"
        className={styles.inputLeft}
        value={getValue.toFixed(3)}
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
            onChange={(e) => handleGetCoinSelect(e.target.value)}
            displayEmpty
            renderValue={(selected) => {
              if (!selected) {
                return (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661"
                      alt="Tether"
                      width="20"
                      height="20"
                      style={{ marginRight: "10px" }}
                    />
                    USDT
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
          <div style={{ marginTop: 3 }}>Price: {tetherPrice} $</div>
        )}
      </div>
    </div>
  );
};

export default MainGet;
