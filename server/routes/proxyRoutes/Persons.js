require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL } = process.env
const { fetchData, handleError } = require('../../utils/Fetching')
const getOpponents = require('../../utils/getOpponents')

router.get('/:id', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/persons/${req.params.id}`)

		if (data.status === 200) {
			return res.send({
				...data,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

router.get('/:id/matches', async (req, res) => {
	try {
		const currentSeason = new Date().getFullYear() 
		const data = await fetchData(
			`${X_API_URL}/persons/${req.params.id}/matches?season=${currentSeason}&limit=100`
		)

		if (data.status === 200) {
			return res.send({
				...data,
				matches: getOpponents(data.matches),
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

module.exports = router
