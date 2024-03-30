import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  gamesData: [],
  status: "idle",
  error: null
};

const API_URL = "https://api.rawg.io/api/games?key=35e190d5b5bd4efea3b23c3a2cae933e";

export const getGames = createAsyncThunk("games/getGames", async () => {
  const response = await axios.get(API_URL);
  return response.data.results.map((game) => ({
    gameId: game.id,
    gameName: game.name,
    gameReleased: game.released,
    gameBg: game.background_image,
    gameRating: game.rating,
  }))
})

const gamesSlice = createSlice({
  initialState,
  name: "games",
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(getGames.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = "succeed";
        state.gamesData = action.payload;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export const selectAllGames = ((state) => state.games.gamesData);
export default gamesSlice.reducer;