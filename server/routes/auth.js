const jwtVerify = require('../utils')
const { Router } = require('express')
const router = new Router()
const { Users } = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/me', jwtVerify, async (req, res) => {
	try {
		const user = await Users.findOne({ where: { id: req.userId } })
		if (!user) {
			return res.json({ status: 310, message: 'Нет такого аккаунта' })
		} else {
			const token = jwt.sign(
				{
					id: user.id,
				},
				process.env.JWT_SECRET_KEY,
				{ expiresIn: '30d' }
			)
			return res.json({
				user,
				token,
			})
		}
	} catch (error) {
		res.json({ status: 310, message: 'Нет доступа!' })
	}
})

router.post('/sign', async (req, res) => {
	try {
		const { email, password, name, lastName, phone, image } = req.body

		const isUsed = await Users.findOne({ where: { email } })

		if (isUsed) {
			return res.json({
				message: 'Такой пользователь уже существует!',
				status: 310,
			})
		}
		const newUser = await Users.create({
			name,
			lastName,
			phone,
			email,
			password: await bcrypt.hash(password, Number(process.env.CRYPT_ROUNDS)),
			role: 'user',
			image: image || '',
		})

		const token = jwt.sign(
			{
				id: newUser.id,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '30d' }
		)

		await newUser.save()

		return res.json({
			newUser,
			token,
			message: 'Регистрация успешна!',
			status: 200,
		})
	} catch (error) {
		res.json({ status: 310, message: 'Ошибка при создании пользователя!' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await Users.findOne({
			where: {
				email,
			},
		})
		if (!user) {
			return res.json({
				status: 310,
				message: 'Такой пользователь не существует',
			})
		}
		const correctPass = await bcrypt.compare(password, user.password)

		if (!correctPass) {
			return res.json({
				status: 310,
				message: 'Неверный пароль.',
			})
		}

		const token = jwt.sign(
			{
				id: user.id,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '30d' }
		)

		res.json({
			token,
			user,
			status: 200,
			message: 'Вы вошли в систему!',
		})
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
