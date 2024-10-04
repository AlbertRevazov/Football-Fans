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
	try {
		const { id } = req.params
		const data = await fetchData(`${X_API_URL}/competitions/${id}/standings`)

		if (data.status === 200) {
			const totalStandings = data.standings.filter(t => t.type === 'TOTAL')
			const combinedData =
				totalStandings.length > 1
					? {
						group: totalStandings,
						competition: data.competition,
						season: data.season,
					}
					: {
						table: totalStandings[0].table,
						competition: data.competition,
						season: data.season,
					}

			return res.send({
				list: combinedData,
				status: data.status,
			})
		} else {
			return res.status(standingsData.status).send(standingsData.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

router.post('/:id/scorers', async (req, res) => {
	try {
		const { id, date } = req.body
		const data = await fetchData(
			`${X_API_URL}/competitions/${id}/scorers?season=${date}`
		)

		if (data.status === 200) {
			return res.send({
				list: data.scorers,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

router.post('/:id/calendar', async (req, res) => {
	try {
		const { id, date } = req.body
		const data = await fetchData(
			`${X_API_URL}/competitions/${id}/matches?season=${date}`
		)

		if (data.status === 200) {
			return res.send({
				list: data.matches,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

router.post('/year', async (req, res) => {
	try {
		const { id, date } = req.body
		const data = await fetchData(
			`${X_API_URL}/competitions/${id}/standings?season=${date}`
		)

		if (data.status === 200) {
			const totalStandings = data.standings.filter(t => t.type === 'TOTAL')
			const combinedData =
				totalStandings.length > 1
					? {
						group: totalStandings,
						competition: data.competition,
						season: data.season,
					}
					: {
						table: totalStandings[0].table,
						competition: data.competition,
						season: data.season,
					}
			return res.send({
				list: combinedData,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		res.sendStatus(STATUS_CODES.INTERNAL_SERVER_ERROR)
	}
})

module.exports = router
