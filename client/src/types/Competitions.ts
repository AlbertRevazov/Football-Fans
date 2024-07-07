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
	scorers: Scorers
}

export type TableOnStanding = {
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
	draw: number
	form: null
	goalDifference: number
	goalsAgainst: number
	goalsFor: number
	lost: number
	playedGames: number
	points: number
	position: number
	team: {
		crest: string
		id: number
		name: string
		shortName: string
		tla: string
	}
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
