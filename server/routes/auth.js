const jwtVerify = require('../utils/jwtCheck')
const { Router } = require('express')
const { Users } = require('../db/models')
const { getUserFavorites } = require('../utils/UserFavorites')
const { STATUS_CODES } = require('../data/ResponseStatuses')
const router = new Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/me', jwtVerify, async (req, res) => {
	try {
		const user = await Users.findOne({ where: { id: req.userId } })
		if (!user) {
			return res
				.status(STATUS_CODES.NOT_FOUND)
				.json({ message: 'Нет такого аккаунта' })
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: '30d',
		})
		const list = await getUserFavorites(req.userId)

		return res.status(STATUS_CODES.SUCCESS).send({
			user,
			token,
			msg: 'User favorites retrieved successfully',
			status: STATUS_CODES.SUCCESS,
			list: list?.Favorites || list,
		})
	} catch (error) {
		console.error(error)
		return res
			.status(STATUS_CODES.INTERNAL_SERVER_ERROR)
			.json({ message: 'Нет доступа!' })
	}
})

router.post('/sign', async (req, res) => {
	try {
		const { email, password, name, lastName, phone, image } = req.body

		const isUsed = await Users.findOne({ where: { email } })
		if (isUsed) {
			return res
				.status(STATUS_CODES.BAD_REQUEST)
				.json({ message: 'Такой пользователь уже существует!' })
		}

		const hashedPassword = await bcrypt.hash(
			password,
			Number(process.env.CRYPT_ROUNDS)
		)
		const newUser = await Users.create({
			name,
			lastName,
			phone,
			email,
			password: hashedPassword,
			role: 'user',
			image: image || '',
		})

		const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: '30d',
		})

		return res.status(STATUS_CODES.SUCCESS).json({
			newUser,
			token,
			message: 'Регистрация успешна!',
			status: STATUS_CODES.SUCCESS,
		})
	} catch (error) {
		console.error(error)
		return res
			.status(STATUS_CODES.INTERNAL_SERVER_ERROR)
			.json({ message: 'Ошибка при создании пользователя!' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await Users.findOne({ where: { email } })
		if (!user) {
			return res
				.status(STATUS_CODES.NOT_FOUND)
				.json({ message: 'Такой пользователь не существует' })
		}

		const correctPass = await bcrypt.compare(password, user.password)
		if (!correctPass) {
			return res
				.status(STATUS_CODES.UNAUTHORIZED)
				.json({ message: 'Неверный пароль.' })
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: '30d',
		})

		return res.status(STATUS_CODES.SUCCESS).json({
			token,
			user,
			status: STATUS_CODES.SUCCESS,
			message: 'Вы вошли в систему!',
		})
	} catch (error) {
		console.error(error)
		return res
			.status(STATUS_CODES.INTERNAL_SERVER_ERROR)
			.json({ message: 'Ошибка при входе в систему!' })
	}
})

module.exports = router
