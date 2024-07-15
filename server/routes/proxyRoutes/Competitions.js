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
	try {
		const { id } = req.params
		const [standingsData, scorersData] = await Promise.all([
			fetchData(`${X_API_URL}/competitions/${id}/standings`),
			fetchData(`${X_API_URL}/competitions/${id}/scorers`),
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
	try {
		const { id, date } = req.body
		const [standingsData, scorersData] = await Promise.all([
			fetchData(`${X_API_URL}/competitions/${id}/standings?season=${date}`),
			fetchData(`${X_API_URL}/competitions/${id}/scorers?season=${date}`),
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
