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

	fetch(`${url}/competitions/`, options)
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

	fetch(`${url}/competitions/${req.params.id}/standings`, options)
		.then(response => response.json())
		.then(response => {
			const data = response.standings
			return res.send({
				table: [...data],
				...response.competition,
				...response.season,
			})
		})
		.catch(error => {
			console.error(error)
			res.sendStatus(500)
		})
})

router.get('/scorers/:id', (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': key,
		},
	}

	fetch(`${url}/competitions/${req.params.id}/scorers`, options)
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
