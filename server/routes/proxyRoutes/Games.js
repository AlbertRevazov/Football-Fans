require('dotenv').config()
const { Router } = require('express')
const { X_API_URL, X_API_KEY } = process.env
const router = new Router()

const {
	fetchAndSortMatches,
	filterMatchesByDate,
	getMoscowDateString,
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
		const headResponse = await fetch(`${X_API_URL}/matches/${id}/head2head`, {
			method: 'GET',
			headers: {
				'X-Auth-Token': X_API_KEY,
			},
		}).then(res => res.json())
		const matchResponse = await fetch(`${X_API_URL}/matches/${id}`, {
			method: 'GET',
			headers: {
				'X-Auth-Token': X_API_KEY,
			},
		}).then(res => res.json())

		return res.send({ match: matchResponse, head: headResponse.aggregates })
	} catch (error) {}
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
