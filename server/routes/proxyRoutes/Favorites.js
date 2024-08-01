require('dotenv').config()
const { Router } = require('express')
const { Users, Favorite, UserFavorite } = require('../../db/models')
const router = new Router()

router.post('/list', async (req, res) => {
	try {
		const { userId } = req.body
		const list = await Users.findByPk(userId, {
			include: [
				{
					model: Favorite,
					through: {
						attributes: [], // Исключаем атрибуты промежуточной таблицы из результата
					},
				},
			],
		})
		if (!list) {
			throw new Error('User not found')
		}
		return res.status(200).send({
			msg: 'User favorites retrieved successfully',
			status: 200,
			list: list.Favorites,
		})
	} catch (error) {
		console.error('Error retrieving user favorites:', error)
		return res.status(500).send({
			msg: 'Internal server error',
			status: 500,
		})
	}
})

router.post('/add', async (req, res) => {
	try {
		const { userId, favorite } = req.body
		const { name, crest, id } = favorite
		if (!userId || !favorite) {
			throw new Error('Favorite or User not found')
		}

		const newFavorite = await Favorite.create({
			favoriteApiId: id,
			name,
			crest,
		})
		await UserFavorite.create({
			userId: userId,
			favoriteId: newFavorite.id,
		})
		return res.status(200).send({
			msg: 'Favorite added successfully',
			status: 200,
		})
	} catch (error) {
		console.error('Error adding favorite:', error)
		return res.status(500).send({
			msg: 'Internal server error',
			status: 500,
		})
	}
})

router.delete('/remove', async (req, res) => {
	try {
		const { userId, favorite } = req.body

		const user = await Users.findOne({ where: { id: userId } })
		await Favorite.findOne({
			where: { favoriteApiId: favorite.id },
		})

		if (!user || !favorite) {
			throw new Error('Favorite or User not found')
		}
		await Favorite.destroy({
			where: {
				favoriteApiId: favorite.id,
			},
		})
		return res.status(200).send({
			msg: 'favorite removed',
			status: 200,
		})
	} catch (error) {
		console.error('Error retrieving user favorites:', error)
		return res.status(500).send({
			msg: 'Internal server error',
			status: 500,
		})
	}
})

module.exports = router
