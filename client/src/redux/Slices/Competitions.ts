import { CompetitionsState } from '@/types/Competitions'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: CompetitionsState = {
	competitionsList: null,
	standing: null,
	isLoading: false,
	error: undefined,
}

export const getCompetitionsList = createAsyncThunk(
	'competitions/list',
	async () => {
		try {
			const response = await fetch(
				'http://localhost:4444/proxy/competitions/list'
			)
			const data = await response.json()

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return data.competitions
		} catch (error) {}
	}
)

export const getCompetitionById = createAsyncThunk(
	'competitions/id',
	async (payload: string) => {
		try {
			const response = await fetch(
				`http://localhost:4444/proxy/competitions/${payload}`
			)

			const scorersResponse = await fetch(
				`http://localhost:4444/proxy/competitions/scorers/${payload}`
			)

			if (!response.ok) {
			}

			const data = await response.json()
			const scorersData = await scorersResponse.json()

			return { data, scorersData }
		} catch (error) {
			throw new Error('Network response was not ok')
		}
	}
)

export const CompetitionsSlice = createSlice({
	name: 'competitions',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getCompetitionsList.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getCompetitionsList.fulfilled, (state, action) => {
			state.isLoading = false
			state.competitionsList = action.payload
		})
		builder.addCase(getCompetitionsList.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error ? action.error.message : 'An error occurred'
		})
		builder.addCase(getCompetitionById.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getCompetitionById.fulfilled, (state, action) => {
			state.isLoading = false
			// console.log(action.payload.data.table[0], '---')
			state.standing = {
				...action.payload?.data,
				scorers: action.payload?.scorersData,
			}
		})
		builder.addCase(getCompetitionById.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error ? action.error.message : 'An error occurred'
		})
	},
})

export default CompetitionsSlice.reducer
