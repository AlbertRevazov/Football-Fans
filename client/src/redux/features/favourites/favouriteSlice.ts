import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FavouriteState } from "../../../types";

const initialState: FavouriteState = {
  areas: null,
  errorMessage: undefined,
  isLoading: false,
  message: undefined,
};

export const getAllAvailableCompetitions = createAsyncThunk(
  "favourites/getAllAvailableCompetitions",

  async () => {
    try {
      const options = {
        method: "GET",
        url: `https://api.football-data.org/v4/competitions`,
        headers: { "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242" },
      };

      const data = axios.request(options).then(function (response) {
        return response.data;
      });
      return data.catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTeamsOfCompetition = createAsyncThunk(
  "favourites/getTeamsOfCompetition",

  async (payload: any) => {
    try {
      const options = {
        method: "GET",
        url: `https://api.football-data.org/v4/competitions/${payload}/teams`,
        headers: { "X-Auth-Token": "1bb65d5d077f4ccba1280a3735cb9242" },
      };

      const data = axios.request(options).then(function (response) {
        return response.data;
      });
      return data.catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    builder.addCase(getAllAvailableCompetitions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllAvailableCompetitions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.areas = action.payload;
    });
    builder.addCase(getAllAvailableCompetitions.rejected, (state, action) => {
      state.isLoading = false;
      //   state.errorMessage = action?.error?.message;
    });

    //
    builder.addCase(getTeamsOfCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeamsOfCompetition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.areas = action.payload;
    });
    builder.addCase(getTeamsOfCompetition.rejected, (state, action) => {
      state.isLoading = false;
      //   state.errorMessage = action?.error?.message;
    });
  },
});

export default favouriteSlice.reducer;
