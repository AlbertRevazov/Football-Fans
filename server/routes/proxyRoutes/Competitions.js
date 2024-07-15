require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { fetchData } = require('../../utils/Fetching')
const { X_API_URL } = process.env

router.get('/list', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/competitions`)
		res.send(data)
	} catch (error) {
		res.sendStatus(500)
	}
})

router.get('/:id', async (req, res) => {
	const { id } = req.params
	const standingsUrl = `${X_API_URL}/competitions/${id}/standings`
	const scorersUrl = `${X_API_URL}/competitions/${id}/scorers`

	try {
		const [standingsData, scorersData] = await Promise.all([
			fetchData(standingsUrl),
			fetchData(scorersUrl),
		])

		const totalStandings = standingsData.standings.filter(
			t => t.type === 'TOTAL'
		)
		const combinedData =
			totalStandings.length > 1
				? {
						group: totalStandings,
						competition: standingsData.competition,
						season: standingsData.season,
						scorers: scorersData.scorers,
				  }
				: {
						table: totalStandings[0].table,
						competition: standingsData.competition,
						season: standingsData.season,
						scorers: scorersData.scorers,
				  }

		res.send(combinedData)
	} catch (error) {
		res.sendStatus(500)
	}
})

router.post('/year', async (req, res) => {
	const { id, date } = req.body
	const standingsUrl = `${X_API_URL}/competitions/${id}/standings?season=${date}`
	const scorersUrl = `${X_API_URL}/competitions/${id}/scorers?season=${date}`

	try {
		const [standingsData, scorersData] = await Promise.all([
			fetchData(standingsUrl),
			fetchData(scorersUrl),
		])

		const totalStandings = standingsData.standings.filter(
			t => t.type === 'TOTAL'
		)
		const combinedData =
			totalStandings.length > 1
				? {
						group: totalStandings,
						competition: standingsData.competition,
						season: standingsData.season,
						scorers: scorersData.scorers,
				  }
				: {
						table: totalStandings[0].table,
						competition: standingsData.competition,
						season: standingsData.season,
						scorers: scorersData.scorers,
				  }

		res.send(combinedData)
	} catch (error) {
		res.sendStatus(500)
	}
})

module.exports = router
