require('dotenv').config()
const { Router } = require('express')
const { Favorite, UserFavorite } = require('../../db/models')
const { getUserFavorites } = require('../../utils/UserFavorites')
const { STATUS_CODES } = require('../../data/ResponseStatuses')
const router = new Router()

router.post('/add', async (req, res) => {
	try {
		const { userId, favorite } = req.body
		const { name, crest, id } = favorite

		if (!userId || !favorite) {
			return res.send({
				msg: 'Favorite or User not found',
				status: STATUS_CODES.BAD_REQUEST,
			})
		}

		// Проверка, существует ли уже такой favorite
		let newFavorite = await Favorite.findOne({
			where: { favoriteApiId: id },
		})

		// Если favorite не существует, создаем новый
		if (!newFavorite) {
			newFavorite = await Favorite.create({
				favoriteApiId: id,
				name,
				crest,
			})
		}

		// Проверка, существует ли уже такая запись в UserFavorites
		const existingUserFavorite = await UserFavorite.findOne({
			where: { userId: userId, favoriteId: newFavorite.id },
		})

		// Если запись не существует, создаем новую
		if (!existingUserFavorite) {
			await UserFavorite.create({
				userId: userId,
				favoriteId: newFavorite.id,
			})
		}

		const list = await getUserFavorites(userId)

		return res.status(200).send({
			list,
			msg: 'Favorite added successfully',
			status: STATUS_CODES.SUCCESS,
		})
	} catch (error) {
		console.error('Error adding favorite:', error)
		return res.status(500).send({
			msg: 'Internal server error',
			status: STATUS_CODES.INTERNAL_SERVER_ERROR,
		})
	}
})
router.delete('/remove', async (req, res) => {
	try {
		const { userId, favorite } = req.body

		if (!userId || !favorite) {
			return res.send({
				msg: 'Favorite or User not found',
				status: STATUS_CODES.BAD_REQUEST,
			})
		}

		const userFavorite = await Favorite.findOne({
			where: { favoriteApiId: favorite.id },
		})

		if (!userFavorite) {
			return res.status(404).send({ msg: 'Favorite not found', status: 404 })
		}

		await Favorite.destroy({
			where: { favoriteApiId: favorite.id },
		})

		const list = await getUserFavorites(userId)

		return res.status(200).send({
			list,
			msg: 'Favorite removed',
			status: STATUS_CODES.SUCCESS,
		})
	} catch (error) {
		console.error('Error removing favorite:', error)
		return res.status(500).send({
			msg: 'Internal server error',
			status: STATUS_CODES.INTERNAL_SERVER_ERROR,
		})
	}
})

module.exports = router
