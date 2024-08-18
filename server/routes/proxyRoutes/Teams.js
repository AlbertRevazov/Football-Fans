require('dotenv').config()
const { Router } = require('express')
const { X_API_URL } = process.env
const { fetchData, handleError } = require('../../utils/Fetching')
const sortedSquad = require('../../utils/sortedSquad')
const router = new Router()

router.get('/:id', async (req, res) => {
	try {
		const [teamData, calendarData] = await Promise.all([
			fetchData(`${X_API_URL}/teams/${req.params.id}`),
			fetchData(`${X_API_URL}/teams/${req.params.id}/matches`),
		])
		if (teamData.status === 200) {
			const groupedPlayers = sortedSquad(teamData.squad)
			return res.send({
				...teamData,
				team: teamData.team,
				squad: groupedPlayers,
				status: teamData.status,
				calendar: calendarData.matches,
			})
		} else {
			return res.status(data.status).send(data.error)
		}
	} catch (error) {
		return handleError(res, error)
	}
})

module.exports = router
