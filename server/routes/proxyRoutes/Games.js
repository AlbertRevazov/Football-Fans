require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL, X_API_KEY } = process.env

router.get('/list', (req, res) => {
	const options = {
		method: req.method,
		headers: {
			'X-Auth-Token': X_API_KEY,
		},
	}

	fetch(`${X_API_URL}/matches`, options)
		.then(response => response.json())
		.then(data => res.send(data.matches))
		.catch(error => {
			console.error(error)
			res.sendStatus(500)
		})
})
module.exports = router
