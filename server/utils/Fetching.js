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
	fetchData,
	handleError,
}
