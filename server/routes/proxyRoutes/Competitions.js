require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const key = process.env.X_API_KEY
const url = process.env.X_API_URL

router.get('/list', (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': key,
		},
	}

	fetch(`${url}/competitions`, options)
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
		method: req.method,
		headers: {
			'X-Auth-Token': key,
		},
	}
	const { id } = req.params
	const standingsUrl = `${url}/competitions/${id}/standings`
	const scorersUrl = `${url}/competitions/${id}/scorers`

	Promise.all([
		fetch(standingsUrl, options).then(response => response.json()),
		fetch(scorersUrl, options).then(response => response.json()),
	])
		.then(([standingsData, scorersData]) => {
			const red = standingsData.standings.filter(t => t.type === 'TOTAL')
			const combinedData =
				red.length > 1
					? {
							group: red,
							competition: standingsData.competition,
							season: standingsData.season,
							scorers: scorersData.scorers,
					  }
					: {
							table: red[0].table,
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
