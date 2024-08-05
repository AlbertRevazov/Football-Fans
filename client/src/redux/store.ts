import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/Auth';
import gameSlice from './slices/Games';
import competitionsSlice from './slices/Competitions';
import teamSlice from './slices/Team';
import personsSlice from './slices/Persons';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    matches: gameSlice,
    tournament: competitionsSlice,
    team: teamSlice,
    player: personsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
