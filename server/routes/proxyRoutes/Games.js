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

	const response = await fetch(`${X_API_URL}/matches`, options)

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
module.exports = router
