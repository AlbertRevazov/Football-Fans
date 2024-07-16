require('dotenv').config()
const { Router, response } = require('express')
const router = new Router()

const { X_API_URL } = process.env
const { fetchData } = require('../../utils/Fetching')
const sortedSquad = require('../../utils/sortedSquad')

router.get('/:id', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/teams/${req.params.id}`)
		// console.log(data, 'data')

		if (data.status === 200) {
			const groupedPlayers = sortedSquad(data.squad)
			return res.send({
				...data,
				team: data.team,
				squad: groupedPlayers,
				status: data.status,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		console.error('Error fetching team data:', error)
		return res.status(500).send({ message: 'Internal Server Error' })
	}
})

router.get('/calendar/:id', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/teams/${req.params.id}/matches`)
		return res.send(data)
	} catch (error) {
		console.error('--------------', error.message)
		return res.status(500).send(error)
	}
})

module.exports = router
