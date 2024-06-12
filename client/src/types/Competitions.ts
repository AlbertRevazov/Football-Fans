export type CompetitionsState = {
	competitionsList: Competitions[] | null
	standing: Competitions | null
	isLoading: boolean
}

 type Competitions = {
	id: number
	name: string
	code: string
	emblem: string
	currentSeason: {
		startDate: string
		endDate: string
		currentMatchday: number
		winner: null
	}
}

 type TableOnStanding = {
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

 type Standings = {
	code: string
	currentMatchday: number
	emblem: string
	endDate: string
	id: number
	name: string
	startDate: string
	table: TableOnStanding[]
	type: string
	winner: null
}

 type Scorers = {
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
