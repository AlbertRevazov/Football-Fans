import { CompetitionsState } from '@/types/Competitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: CompetitionsState = {
  competitionsList: null,
  data: null,
  isLoading: false,
  error: undefined,
};

export const getCompetitionsList = createAsyncThunk('competitions/list', async () => {
  try {
    const response = await fetch('http://localhost:4444/proxy/competitions/list');
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return data.competitions;
  } catch (error) {}
});

export const getCompetitionById = createAsyncThunk('competitions/id', async (payload: string) => {
  try {
    const response = await fetch(`http://localhost:4444/proxy/competitions/${payload}`);

    if (!response.ok) {
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error('Network response was not ok');
  }
});

export const getCompetitionByYear = createAsyncThunk(
  'competitions/year',
  async (payload: { id: string; date: string }) => {
    try {
      const response = await fetch(`http://localhost:4444/proxy/competitions/year/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  }
);

export const CompetitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCompetitionsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompetitionsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.competitionsList = action.payload;
    });
    builder.addCase(getCompetitionsList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error ? action.error.message : 'An error occurred';
    });
    builder.addCase(getCompetitionById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompetitionById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.data;
    });
    builder.addCase(getCompetitionById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error ? action.error.message : 'An error occurred';
    });
    builder.addCase(getCompetitionByYear.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompetitionByYear.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.data;
    });
    builder.addCase(getCompetitionByYear.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error ? action.error.message : 'An error occurred';
    });
  },
});

export default CompetitionsSlice.reducer;
