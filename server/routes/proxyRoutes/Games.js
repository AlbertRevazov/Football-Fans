require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL } = process.env
const { getMoscowDateString } = require('../../utils/FormatTime')
const {
	fetchAndSortMatches,
	filterMatchesByDate,
	fetchData,
} = require('../../utils/Fetching')

router.get('/list', async (req, res) => {
	try {
		const date = new Date()
		const moscowDate = getMoscowDateString(date)
		const newDate = new Date(date)
		newDate.setDate(newDate.getDate() + 1)
		const newDateString = getMoscowDateString(newDate)

		const matches = await fetchAndSortMatches(moscowDate, newDateString)
		const filteredMatches = filterMatchesByDate(matches, moscowDate)
		return res.send(filteredMatches)
	} catch (error) {
		return res.status(500).send(error.message)
	}
})

router.get('/head2head/:id', async (req, res) => {
	try {
		const { id } = req.params
		const [headResponse, matchResponse] = await Promise.all([
			fetchData(`${X_API_URL}/matches/${id}/head2head`),
			fetchData(`${X_API_URL}/matches/${id}`),
		])

		return res.send({ match: matchResponse, head: headResponse.aggregates })
	} catch (error) {
		return res.status(500).send(error.message)
	}
})

router.post('/list', async (req, res) => {
	try {
		const { date } = req.body
		const moscowDate = getMoscowDateString(date)
		const newDate = new Date(date)
		newDate.setDate(newDate.getDate() + 1)
		const newDateString = getMoscowDateString(newDate)

		const matches = await fetchAndSortMatches(moscowDate, newDateString)
		const filteredMatches = filterMatchesByDate(matches, moscowDate)
		return res.send(filteredMatches)
	} catch (error) {
		return res.status(500).send(error.message)
	}
})

module.exports = router
