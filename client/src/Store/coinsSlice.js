import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoins = createAsyncThunk("coins/fetchCoins", async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false`
  );
  const data = await response.json();
  return data;
});

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coinsSlice.reducer;
