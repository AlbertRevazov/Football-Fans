import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PersonState } from '@/types/PersonsTypes';

const initialState: PersonState = {
  person: null,
  personMatches: null,
  isLoading: false,
  status: '',
  errorCode: '',
};

export const getPersonById = createAsyncThunk('person/id', async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4444/proxy/persons/${id}`);

    if (response.status !== 200) {
      const error = await response.json();
      return error;
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
});

export const getMatchesByPersonId = createAsyncThunk('person/matches', async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4444/proxy/persons/${id}/matches`);

    if (response.status !== 200) {
      const error = await response.json();
      return error;
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
});

export const PersonsSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPersonById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPersonById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.person = action.payload;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getPersonById.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getMatchesByPersonId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMatchesByPersonId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.personMatches = action.payload?.matches;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(getMatchesByPersonId.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default PersonsSlice.reducer;
