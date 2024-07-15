const { X_API_URL, X_API_KEY } = process.env

const options = {
	method: 'GET',
	headers: {
		'X-Auth-Token': X_API_KEY,
	},
}

async function fetchAndSortMatches(dateFrom, dateTo) {
	const response = await fetch(
		`${X_API_URL}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
		options
	)
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
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

	return Object.values(sortedMatches).flat()
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

async function fetchData(url) {
	try {
		const response = await fetch(url, options)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error('Fetch error:', error)
		throw error
	}
}

module.exports = {
	fetchAndSortMatches,
	filterMatchesByDate,
	fetchData,
}
