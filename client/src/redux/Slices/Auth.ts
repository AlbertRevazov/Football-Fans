import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginInput, SignUpData, AuthState } from '@/types/Auth';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  status: '',
  message: '',
  liked: null,
};

export const getMe = createAsyncThunk('auth/me', async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await fetch('http://localhost:4444/auth/me', {
        method: 'GET',
        headers: {
          authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    }

    return null;
  } catch (error) {
    console.log(error);
  }
});

export const getUserSign = createAsyncThunk('auth/sign', async (userData: SignUpData) => {
  const response = await fetch('http://localhost:4444/auth/sign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
});

export const getUserLogin = createAsyncThunk('auth/login', async (userData: LoginInput) => {
  try {
    const { email, password, remember } = userData;
    const response = await fetch(
      'http://localhost:4444/auth/login',

      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
      }
    );
    const data = await response.json();

    if (data.token && remember) {
      window.localStorage.setItem('token', data.token);
    }
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addToFavorites = createAsyncThunk(
  'auth/favorites/add',
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
  'auth/favorites/remove',
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

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.status = '';
      localStorage.removeItem('token');
    },
  },

  extraReducers(builder) {
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.status = action.payload?.status;
      state.message = action.payload?.message;
      state.liked = action.payload?.list;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getUserSign.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserSign.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.status = action.payload?.status;
      state.message = action.payload?.message;
    });
    builder.addCase(getUserSign.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getUserLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.status = action.payload?.status;
      state.message = action.payload?.message;
    });
    builder.addCase(getUserLogin.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.liked = action.payload?.list;
    });
    builder.addCase(addToFavorites.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeFromFavorites.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.liked = action.payload?.list;
    });
    builder.addCase(removeFromFavorites.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
