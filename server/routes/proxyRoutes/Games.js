require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL } = process.env
const { getMoscowDateString } = require('../../utils/FormatTime')
const {
	fetchAndSortMatches,
	filterMatchesByDate,
	fetchData,
	handleError,
} = require('../../utils/Fetching')

router.get('/list', async (req, res) => {
	try {
		const date = new Date()
		const moscowDate = getMoscowDateString(date)
		const newDate = new Date(date)
		newDate.setDate(newDate.getDate() + 1)
		const newDateString = getMoscowDateString(newDate)

		const data = await fetchAndSortMatches(moscowDate, newDateString)

		if (data.status === 200) {
			const filteredMatches = filterMatchesByDate(data.data, moscowDate)
			return res.send({ list: filteredMatches, status: data.status })
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

router.post('/date', async (req, res) => {
	try {
		const { date } = req.body
		const moscowDate = getMoscowDateString(date)
		const newDate = new Date(date)
		newDate.setDate(newDate.getDate() + 1)
		const newDateString = getMoscowDateString(newDate)

		const data = await fetchAndSortMatches(moscowDate, newDateString)

		if (data.status === 200) {
			const filteredMatches = filterMatchesByDate(data.data, moscowDate)
			return res.send({ list: filteredMatches, status: data.status })
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

router.get('/head2head/:id', async (req, res) => {
	try {
		const { id } = req.params
		const [headResponse, matchResponse] = await Promise.all([
			fetchData(`${X_API_URL}/matches/${id}/head2head`),
			fetchData(`${X_API_URL}/matches/${id}`),
		])

		const list = { match: matchResponse, head: headResponse.aggregates }
		if (headResponse.status === 200) {
			return res.send({
				list,
				status: headResponse.status,
			})
		} else {
			return res.status(headResponse.status).send(headResponse.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

module.exports = router
