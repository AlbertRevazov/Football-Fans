const { Users, Favorite } = require('../db/models')

const getUserFavorites = async userId => {
	const list = await Users.findByPk(userId, {
		include: [
			{
				model: Favorite,
				through: {
					attributes: [],
				},
			},
		],
	})
	return list ? list.Favorites : []
}
module.exports = { getUserFavorites }
