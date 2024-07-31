import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TeamsState } from '@/types/Teams';

const initialState: TeamsState = {
  team: null,
  isLoading: false,
  status: 0,
};

export const getTeamById = createAsyncThunk(
  'team/id',
  async (payload: { userId: string; id: string }) => {
    try {
      console.log(payload, 'slice');
      const response = await fetch(`http://localhost:4444/proxy/teams/${payload.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${payload.userId}`, 
        },
      });

      if (response.status !== 200) {
        const error = await response.json();
        return error;
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
);

export const TeamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTeamById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTeamById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.team = action.payload;
      state.status = action.payload?.status;
    });
    builder.addCase(getTeamById.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default TeamSlice.reducer;
