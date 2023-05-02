import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TournamentState } from "../../../types";

const initialState: TournamentState = {
  tournament: null,
  topScorers: null,
  isLoading: false,
  errorMessage: null,
};

export const getTableCompetition = createAsyncThunk(
  "competitions/getTableCompetition",

  async (payload: any) => {
    try {
      const apiUrl = "http://localhost:3003";
      const response = await fetch(`${apiUrl}/proxy/competitions/${payload}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getScorersCompetition = createAsyncThunk(
  "competitions/getScorersCompetition",

  async (payload: any) => {
    try {
      const apiUrl = "http://localhost:3003";
      const response = await fetch(`${apiUrl}/proxy/scorers/${payload}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {},
  // Таблица турнира
  extraReducers: (builder) => {
    builder.addCase(getTableCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTableCompetition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tournament = action.payload;
    });
    builder.addCase(getTableCompetition.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
    // Таблица бомбардиров
    builder.addCase(getScorersCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getScorersCompetition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.topScorers = action.payload;
    });
    builder.addCase(getScorersCompetition.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    });
  },
});
export default competitionsSlice.reducer;
