import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import matchesSlice from "./features/matches/matchesSlice";
import teamsSlice from "./features/teams/teamsSlice";
import competitionsSlice from "./features/competitions/competitionsSlice";
import favouriteSlice from "./features/favourites/favouriteSlice";

export const store = configureStore({
  reducer: {
    users: authSlice,
    matches: matchesSlice,
    teams: teamsSlice,
    competitions: competitionsSlice,
    favourites: favouriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
