const { X_API_URL, X_API_KEY } = process.env

const options = {
	method: 'GET',
	headers: {
		'X-Auth-Token': X_API_KEY,
	},
}

async function fetchAndSortMatches(dateFrom, dateTo) {
	try {
		const response = await fetch(
			`${X_API_URL}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
			options
		)

		const status = response.status
		if (!response.ok) {
			const error = await response.json()
			return { status: response.status, error }
		}

		const games = await response.json()
		const sortedMatches = {}

		games.matches.forEach(match => {
			const competitionName = match.competition.name
			if (!sortedMatches[competitionName]) {
				sortedMatches[competitionName] = []
			}
			sortedMatches[competitionName].push(match)
		})

		return { status, data: Object.values(sortedMatches).flat() }
	} catch (error) {
		console.error('Fetch error:', error)
		throw error
	}
}

function filterMatchesByDate(matches, date) {
	const targetDate = new Date(date).toISOString().split('T')[0]

	return matches.filter(match => {
		const matchDate = new Date(match.utcDate)
		const matchDateString = matchDate.toISOString().split('T')[0]
		const matchHour = matchDate.getUTCHours()

		if (matchHour < 2 && matchDateString === targetDate) {
			return true
		}

		return matchDateString === targetDate
	})
}

function groupMatchesByCompetition(matches) {
	const groupedMatches = {}

	matches.forEach(match => {
		const competitionName = match.competition.name

		if (!groupedMatches[competitionName]) {
			groupedMatches[competitionName] = []
		}

		groupedMatches[competitionName].push(match)
	})

	return groupedMatches
}

async function fetchData(url) {
	try {
		const response = await fetch(url, options)

		if (!response.ok) {
			const error = await response.json()
			return { status: response.status, error }
		}
		const data = await response.json()
		return { ...data, status: response.status }
	} catch (error) {
		console.error('Fetch error:', error)
		throw error
	}
}

const handleError = (res, error) => {
	console.error('Error:', error)
	return res.status(500).send({ message: 'Internal Server Error' })
}

module.exports = {
	fetchAndSortMatches,
	filterMatchesByDate,
	fetchData,
	handleError,
	groupMatchesByCompetition,
}
