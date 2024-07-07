import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/Auth'
import gameSlice from './Slices/Games'
import competitionsSlice from './Slices/Competitions'
import teamSlice from './Slices/Team'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		matches: gameSlice,
		tournament: competitionsSlice,
		team: teamSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
