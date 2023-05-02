import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GamesState } from "../../../types";

const initialState: GamesState = {
  games: null,
  isLoading: false,
  errorMessage: null,
};

export const getMatches = createAsyncThunk("matches/getMatches", async () => {
  try {
    const apiUrl = "http://localhost:3003";
    const response = await fetch(`${apiUrl}/proxy/matches`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatches.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload?.matches;
    });
    builder.addCase(getMatches.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});
export default matchesSlice.reducer;
