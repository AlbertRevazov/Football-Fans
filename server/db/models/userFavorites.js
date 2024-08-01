'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class UserFavorite extends Model {
		static associate(models) {
			UserFavorite.belongsTo(models.Favorite, {
				foreignKey: 'favoriteId',
				as: 'favorite',
			})
		}
	}
	UserFavorite.init(
		{
			userId: DataTypes.INTEGER,
			favoriteId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'UserFavorite',
		}
	)

	return UserFavorite
}
