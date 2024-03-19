export type User = {
	message: string
	id: number
	name: string
	lastName: string
	phone: string
	email: string
	password: string
	role: string
	image: string
	favoriteName: string
	favoriteApiId: string
}

export type AuthState = {
	user: User | null
	isLoading: boolean
	status: string
}

export type Competitions = {
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

export type CompetitionsState = {
	competitionsList: Competitions[] | null
	standing: Competitions | null
	isLoading: boolean
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
