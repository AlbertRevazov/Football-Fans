import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GamesState } from '../../types/Games';

const initialState: GamesState = {
  games: null,
  head2head: null,
  isLoading: false,
  status: null,
  errorCode: 0,
};

export const getMatchesList = createAsyncThunk('matches/list', async () => {
  const response = await fetch('https://localhost:4444/proxy/games/list');

  if (response.status !== 200) {
    const error = await response.json();
    return error;
  }

  return await response.json();
});

export const getMatchesListByDate = createAsyncThunk('matches/date', async (payload: string) => {
  const response = await fetch('https://localhost:4444/proxy/games/date', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ date: payload }),
  });

  if (response.status !== 200) {
    const error = await response.json();
    return error;
  }

  return await response.json();
});

export const getMatchById = createAsyncThunk('matches/head2head', async (payload: string) => {
  const response = await fetch(`https://localhost:4444/proxy/games/head2head/${payload}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (response.status !== 200) {
    const error = await response.json();
    return error;
  }

  return await response.json();
});

export const MatchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMatchesList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatchesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload?.list;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getMatchesList.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getMatchesListByDate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatchesListByDate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload?.list;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getMatchesListByDate.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getMatchById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatchById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.head2head = action.payload?.list;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getMatchById.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default MatchesSlice.reducer;
