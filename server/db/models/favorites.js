'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Favorite extends Model {
		static associate(models) {
			// Определение связи "многие ко многим" через промежуточную таблицу UserFavorites
			Favorite.belongsToMany(models.Users, {
				through: 'UserFavorites',
				foreignKey: 'favoriteId',
				otherKey: 'userId',
			})
		}
	}

	Favorite.init(
		{
			favoriteApiId: DataTypes.STRING,
			name: DataTypes.STRING,
			crest: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Favorite',
		}
	)

	return Favorite
}
