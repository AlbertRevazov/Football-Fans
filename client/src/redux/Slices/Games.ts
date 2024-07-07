import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GamesState } from './../../types/Games'

const initialState: GamesState = {
	games: null,
	isLoading: false,
	status: '',
}

export const getMatchesList = createAsyncThunk('matches/list', async () => {
	try {
		const response = await fetch('http://localhost:4444/proxy/games/list')

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		return await response.json()
	} catch (error) {
		console.log(error)
	}
})

export const MatchesSlice = createSlice({
	name: 'matches',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getMatchesList.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getMatchesList.fulfilled, (state, action) => {
			state.isLoading = false
			state.games = action.payload
			state.status = action.payload?.message
		})
		builder.addCase(getMatchesList.rejected, state => {
			state.isLoading = false
		})
	},
})

export default MatchesSlice.reducer
