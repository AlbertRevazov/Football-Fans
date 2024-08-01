import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFavorites } from './../../types/Favorites';

const initialState: IFavorites = {
  data: null,
  isLoading: false,
  status: null,
  errorCode: 0,
};

export const getFavoritesList = createAsyncThunk('favorites/list', async (payload: string) => {
  const response = await fetch('http://localhost:4444/proxy/favorites/list', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ userId: payload }),
  });

  if (response.status !== 200) {
    const error = await response.json();
    return error;
  }

  return await response.json();
});

export const addToFavorites = createAsyncThunk(
  'favorites/add',
  async (payload: { userId: string; favorite: { id: string; name: string; crest: string } }) => {
    const response = await fetch('http://localhost:4444/proxy/favorites/add', {
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
  }
);
export const removeFromFavorites = createAsyncThunk(
  'favorites/remove',
  async (payload: { userId: string; favorite: { id: string; name: string; crest: string } }) => {
    const response = await fetch('http://localhost:4444/proxy/favorites/remove', {
      method: 'DELETE',
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
  }
);

export const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFavoritesList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFavoritesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.list;
      state.status = action.payload?.msg;
      state.errorCode = action.payload?.status;
    });
    builder.addCase(getFavoritesList.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.list;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(addToFavorites.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(removeFromFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload?.list;
      state.status = action.payload?.message;
      state.errorCode = action.payload?.errorCode;
    });
    builder.addCase(removeFromFavorites.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default FavoritesSlice.reducer;
