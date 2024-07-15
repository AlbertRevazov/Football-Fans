require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_KEY, X_API_URL } = process.env

async function fetchData(url) {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-Auth-Token': X_API_KEY,
			},
		})
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		throw new Error(`Fetch error: ${error.message}`)
	}
}

router.get('/:id', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/teams/${req.params.id}`)
		const Squad = {}
		data.squad.forEach(g => {
			const position = g.position || 'Unknown'
			if (!Squad[position]) {
				Squad[position] = []
			}
			Squad[position].push(g)
		})

		return res.send({ ...data, team: data.team, squad: Squad })
	} catch (error) {
		console.error(error)
		return res.status(500).send(error.message)
	}
})

router.get('/calendar/:id', async (req, res) => {
	try {
		const data = await fetchData(`${X_API_URL}/teams/${req.params.id}/matches`)
		return res.send(data)
	} catch (error) {
		console.error(error)
		return res.status(500).send(error.message)
	}
})

module.exports = router
