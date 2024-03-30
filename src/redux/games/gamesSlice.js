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
    gameRatingTop: game.rating_top
  }))
})

export const selectAllGames = ((state) => state.games.gamesData);
export default gamesSlice.reducer;