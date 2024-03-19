import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/AuthSlice'
import gameSlice from './features/MatchesSlice'
import competitionsSlice from './features/CompetitionsSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		games: gameSlice,
		tournament: competitionsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
