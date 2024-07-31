import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Slices/Auth';
import gameSlice from './Slices/Games';
import competitionsSlice from './Slices/Competitions';
import teamSlice from './Slices/Team';
import personsSlice from './Slices/Persons';
import favoriteSlice from './Slices/Favorites';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    matches: gameSlice,
    tournament: competitionsSlice,
    team: teamSlice,
    player: personsSlice,
    liked: favoriteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
