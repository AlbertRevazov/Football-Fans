const { UserFavorite, Favorite } = require('../db/models')

const checkIfUserHasFavorite = async (userId, favoriteApiId) => {
	const userFavorite = await UserFavorite.findOne({
		include: [
			{
				model: Favorite,
				as: 'favorite',
				where: {
					favoriteApiId: favoriteApiId,
				},
			},
		],
		where: {
			userId: userId,
		},
	})

	return !!userFavorite
}
module.exports = { checkIfUserHasFavorite }
