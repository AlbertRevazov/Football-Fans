require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_KEY, X_API_URL } = process.env

router.get('/:id', (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	fetch(`${X_API_URL}/teams/${req.params.id}`, options)
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
