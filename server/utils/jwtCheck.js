require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtVerify = (req, res, next) => {
	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
	if (token) {
		try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
		req.userId = decoded.id
		next()
		} catch (error) {
			return res.json({
				message: 'Something is wrong try later',
			})
		}
	} else {
		return res.json({
			message: 'Token error',
		})
	}
}
module.exports = jwtVerify
