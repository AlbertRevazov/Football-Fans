const { X_API_URL, X_API_KEY } = process.env

async function fetchAndSortMatches(dateFrom, dateTo) {
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	const response = await fetch(
		`${X_API_URL}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
		options
	)

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	const games = await response.json()
	const sortedMatches = {}

	games.matches.forEach(g => {
		const competitionName = g.competition.name
		if (!sortedMatches[competitionName]) {
			sortedMatches[competitionName] = []
		}
		sortedMatches[competitionName].push(g)
	})

	return Object.values(sortedMatches).flat()
}

function filterMatchesByDate(matches, date) {
	return matches.filter(el => {
		const matchDate = new Date(el.utcDate)
		const matchDateString = matchDate.toISOString().split('T')[0]
		const matchHour = matchDate.getUTCHours()

		if (
			matchHour < 2 &&
			matchDateString === new Date(date).toISOString().split('T')[0]
		) {
			return true
		}

		return matchDateString === date
	})
}

function getMoscowDateString(date) {
	const moscowDate = new Date(date)
	moscowDate.setMinutes(
		moscowDate.getMinutes() + moscowDate.getTimezoneOffset() + 180
	)
	return moscowDate.toISOString().split('T')[0]
}

async function fetchData(url) {
	try {
		const fetchOptions = {
			method: 'GET',
			headers: {
				'X-Auth-Token': X_API_KEY,
			},
		}
		const response = await fetch(url, fetchOptions)
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
	getMoscowDateString,
	fetchData,
}
