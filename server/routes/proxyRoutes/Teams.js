require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_KEY, X_API_URL } = process.env

router.get('/:id', async (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	const response = await fetch(`${X_API_URL}/teams/${req.params.id}`, options)

	const data = await response.json()
	const Squad = {}
	data.squad.forEach(g => {
		const competitionName = g.position
		if (!Squad[competitionName]) {
			Squad[competitionName] = []
		}
		Squad[competitionName].push(g)
	})

	return res.send({ ...data, team: data.team, squad: Squad })
})

router.get('/calendar/:id', (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	fetch(`${X_API_URL}/teams/${req.params.id}/matches`, options)
		.then(response => {
			res.status(response.status)
			return response.json()
		})
		.then(data => {
			res.send(data)
		})
		.catch(error => {
			console.error(error)
			res.sendStatus(500)
		})
})

module.exports = router
