require('dotenv').config()
const { Router } = require('express')
const router = new Router()

const { X_API_URL } = process.env
const { fetchData, handleError } = require('../../utils/Fetching')

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

module.exports = router
