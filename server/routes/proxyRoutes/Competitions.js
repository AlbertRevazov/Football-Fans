require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { STATUS_CODES } = require('../../data/ResponseStatuses')
const { fetchData } = require('../../utils/Fetching')
const { X_API_URL } = process.env

router.get('/list', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/competitions`)

		if (data.status === 200) {
			return res.send({
				list: data,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		res.sendStatus(500)
	}
})

router.get('/:id', async (req, res) => {
	// const data = await fetchData(`${X_API_URL}/competitions/${id}/matches`)

	try {
		const { id } = req.params
		const [standingsData, scorersData, matchesData] = await Promise.all([
			fetchData(`${X_API_URL}/competitions/${id}/standings`),
			fetchData(`${X_API_URL}/competitions/${id}/scorers`),
			fetchData(`${X_API_URL}/competitions/${id}/matches`),
		])

		if (standingsData.status === 200) {
			const totalStandings = standingsData.standings.filter(
				t => t.type === 'TOTAL'
			)

			const filteredMatches = matchesData.matches.filter(el => el.homeTeam.name)
			const combinedData =
				totalStandings.length > 1
					? {
							group: totalStandings,
							competition: standingsData.competition,
							season: standingsData.season,
							scorers: scorersData.scorers,
							matches: filteredMatches,
					  }
					: {
							table: totalStandings[0].table,
							competition: standingsData.competition,
							season: standingsData.season,
							scorers: scorersData.scorers,
							matches: filteredMatches,
					  }

			return res.send({
				list: combinedData,
				status: standingsData.status,
			})
		} else {
			return res.status(standingsData.status).send(standingsData.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

router.post('/year', async (req, res) => {
	try {
		const { id, date } = req.body
		const [standingsData, scorersData] = await Promise.all([
			fetchData(`${X_API_URL}/competitions/${id}/standings?season=${date}`),
			fetchData(`${X_API_URL}/competitions/${id}/scorers?season=${date}`),
		])

		if (standingsData.status === 200) {
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
			return res.send({
				list: combinedData,
				status: standingsData.status,
			})
		} else {
			return res.status(standingsData.status).send(standingsData.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

module.exports = router
