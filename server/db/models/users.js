'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// Определение связи "многие ко многим" через промежуточную таблицу UserFavorites
			User.belongsToMany(models.Favorite, {
				through: 'UserFavorites',
				foreignKey: 'userId',
				otherKey: 'favoriteId',
			})
		}
	}

	User.init(
		{
			name: DataTypes.STRING,
			lastName: DataTypes.STRING,
			phone: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: DataTypes.STRING,
			role: DataTypes.STRING,
			image: DataTypes.STRING,
			favoriteApiId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	)

	return User
}
