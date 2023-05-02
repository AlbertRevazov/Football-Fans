import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TeamState } from "../../../types";

const initialState: TeamState = {
  club: null,
  calendar: null,
  name: null,
  errorMessage: undefined,
  isLoading: false,
};

export const getTeams = createAsyncThunk(
  "getTeams",

  async (payload: any) => {
    try {
      const apiUrl = "http://localhost:3003";
      const response = await fetch(`${apiUrl}/proxy/teams/${payload}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCalendar = createAsyncThunk(
  "getCalendar",

  async (payload: any) => {
    try {
      const apiUrl = "http://localhost:3003";
      const response = await fetch(`${apiUrl}/proxy/calendar/${payload}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Информация о команде
    builder.addCase(getTeams.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.isLoading = false;
      state.club = action.payload;
      state.name = action.payload.name;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action?.error?.message;
    });
    // Информация о предстоящих матчах
    builder.addCase(getCalendar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCalendar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.calendar = action.payload;
    });
    builder.addCase(getCalendar.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default teamsSlice.reducer;
