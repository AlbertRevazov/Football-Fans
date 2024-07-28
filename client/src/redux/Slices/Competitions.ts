import { CompetitionsState } from '@/types/Competitions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: CompetitionsState = {
  competitionsList: null,
  data: null,
  isLoading: false,
  errorCode: 0,
  status: 0,
};

export const getCompetitionsList = createAsyncThunk('competitions/list', async () => {
  try {
    const response = await fetch('http://localhost:4444/proxy/competitions/list');
    if (response.status !== 200) {
      const error = await response.json();
      return error;
    }

    return await response.json();
  } catch (error) {}
});

export const getCompetitionById = createAsyncThunk('competitions/id', async (payload: string) => {
  try {
    const response = await fetch(`http://localhost:4444/proxy/competitions/${payload}`);

    if (response.status !== 200) {
      const error = await response.json();
      return error;
    }

    return await response.json();
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

      if (response.status !== 200) {
        const error = await response.json();
        return error;
      }

      return await response.json();
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
      state.competitionsList = action.payload?.list?.competitions;
      state.status = action.payload?.status;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getCompetitionsList.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCompetitionById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompetitionById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.list;
      state.status = action.payload?.status;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getCompetitionById.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCompetitionByYear.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompetitionByYear.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.list;
      state.status = action.payload?.status;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getCompetitionByYear.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default CompetitionsSlice.reducer;
