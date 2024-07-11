require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL, X_API_KEY } = process.env

router.get('/list', async (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	const date = new Date().toISOString().split('T')[0]
	const response = await fetch(
		`${X_API_URL}/matches?dateFrom=${date}&dateTo=${date}`,
		options
	)

	if (response.ok) {
		const games = await response.json()

		const sortedMatches = {}

		games.matches.forEach(g => {
			const competitionName = g.competition.name
			if (!sortedMatches[competitionName]) {
				sortedMatches[competitionName] = []
			}
			sortedMatches[competitionName].push(g)
		})

		return res.send(Object.values(sortedMatches).flat())
	} else {
		return res.status(response.status)
	}
})

router.post('/list', async (req, res) => {
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	const { date } = req.body
	const newDate = new Date(date)

	newDate.setDate(newDate.getDate() + 1)
	const newDateString = newDate.toISOString().split('T')[0]

	const response = await fetch(
		`${X_API_URL}/matches?dateFrom=${date}&dateTo=${newDateString}`,
		options
	)

	if (response.ok) {
		const games = await response.json()
		const sortedMatches = {}
		games.matches.forEach(g => {
			const competitionName = g.competition.name
			if (!sortedMatches[competitionName]) {
				sortedMatches[competitionName] = []
			}
			sortedMatches[competitionName].push(g)
		})

		return res.send(
			Object.values(sortedMatches)
				.flat()
				.filter(el => {
					const matchDate = new Date(el.utcDate).toISOString().split('T')[0]
					return matchDate === date
				})
		)
	} else {
		return res.status(response.status)
	}
})

module.exports = router
