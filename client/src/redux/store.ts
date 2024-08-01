import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Slices/Auth';
import gameSlice from './Slices/Games';
import competitionsSlice from './Slices/Competitions';
import teamSlice from './Slices/Team';
import personsSlice from './Slices/Persons';

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
