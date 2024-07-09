export type CompetitionsState = {
	competitionsList: Competitions[] | null
	standing: Competitions | null
	isLoading: boolean
	error: string | undefined
}

export type Competitions = {
	id: number
	name: string
	code: string
	emblem: string
	startDate: string
	endDate: string
	currentSeason: {
		currentMatchday: number
		winner: null
	}
	table: Standings[]
	scorers: Scorers[]
}

export type Table = {
	team: {
		id: number
		name: string
		shortName: string
		tla: string
		crest: string
	}
	position: number
	playedGames: number
	form: null
	won: number
	draw: number
	lost: number
	points: number
	goalsFor: number
	goalsAgainst: number
	goalDifference: number
}

export type Standings = {
	group: string
	stage: string
	table: Table[]
	type: string
}

export type Scorers = {
	assists: number
	goals: number
	penalties: number
	playedMatches: number
	player: {
		id: number
		name: string
		nationality: string
		position: null
		section: string
		shirtNumber: null
	}
	team: {
		crest: string
		id: number
		name: string
		shortName: string
	}
}
