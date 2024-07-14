require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const {
	fetchAndSortMatches,
	filterMatchesByDate,
	getMoscowDateString,
} = require('../../utils/Fetching')

router.get('/list', async (req, res) => {
	try {
		const date = new Date() // Получаем текущую дату
		const moscowDate = getMoscowDateString(date)
		const newDate = new Date(date)
		newDate.setDate(newDate.getDate() + 1) // Увеличиваем дату на один день
		const newDateString = getMoscowDateString(newDate)

		const matches = await fetchAndSortMatches(moscowDate, newDateString)
		const filteredMatches = filterMatchesByDate(matches, moscowDate)
		return res.send(filteredMatches)
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
