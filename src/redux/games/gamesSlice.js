import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  gamesData: [],
  gameDetailsData: [],
  gameScreenShot: [],
  status: 'idle',
  error: null,
};

const API_URL = 'https://api.rawg.io/api/games';

export const getGames = createAsyncThunk('games/getGames', async () => {
  const response = await axios.get(`${API_URL}?key=35e190d5b5bd4efea3b23c3a2cae933e`);
  return response.data.results.map((game) => ({
    gameId: game.id,
    gameName: game.name,
    gameReleased: game.released,
    gameBg: game.background_image,
    gameRating: game.rating,
  }));
});

export const getGameDetails = createAsyncThunk('games/getGameDetails', async (id) => {
  const response = await axios.get(`${API_URL}/${id}?key=35e190d5b5bd4efea3b23c3a2cae933e`);
  return response.data;
});

export const getGameScreenShots = createAsyncThunk('games/getGameScreenShots', async (id) => {
  const response = await axios.get(`${API_URL}/${id}/screenshots?key=35e190d5b5bd4efea3b23c3a2cae933e`);
  return response.data.results.map((gameImage) => ({
    gameId: gameImage.id,
    gameScreenShot: gameImage.image,
  }));
});

const gamesSlice = createSlice({
  initialState,
  name: 'games',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGames.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.gamesData = action.payload;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(getGameDetails.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getGameDetails.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.gameDetailsData = action.payload;
      })
      .addCase(getGameDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(getGameScreenShots.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getGameScreenShots.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.gameScreenShots = action.payload;
      })
      .addCase(getGameScreenShots.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllGames = ((state) => state.games.gamesData);
export const selectAllGameDetails = ((state) => state.games.gameDetailsData);
export const selectAllGameScreenShots = ((state) => state.games.gameScreenShots);

export default gamesSlice.reducer;
