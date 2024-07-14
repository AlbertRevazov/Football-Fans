require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_KEY, X_API_URL } = process.env

router.get('/list', (req, res) => {
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	fetch(`${X_API_URL}/competitions`, options)
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

router.get('/:id', (req, res) => {
	const options = {
		method: 'GET',
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}
	const { id } = req.params
	const standingsUrl = `${X_API_URL}/competitions/${id}/standings`
	const scorersUrl = `${X_API_URL}/competitions/${id}/scorers`

	Promise.all([
		fetch(standingsUrl, options).then(response => response.json()),
		fetch(scorersUrl, options).then(response => response.json()),
	])
		.then(([standingsData, scorersData]) => {
			const totalStandings = standingsData.standings.filter(
				t => t.type === 'TOTAL'
			)
			const combinedData =
				totalStandings.length > 1
					? {
							group: totalStandings,
							competition: standingsData.competition,
							season: standingsData.season,
							scorers: scorersData.scorers,
					  }
					: {
							table: totalStandings[0].table,
							competition: standingsData.competition,
							season: standingsData.season,
							scorers: scorersData.scorers,
					  }
			return res.send(combinedData)
		})
		.catch(error => {
			console.error(error)
			res.sendStatus(500)
		})
})
module.exports = router
