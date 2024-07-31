'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			// Определение связи "многие ко многим" через промежуточную таблицу UserFavorites
			Users.belongsToMany(models.Favorite, {
				through: 'UserFavorites',
				foreignKey: 'userId',
				otherKey: 'favoriteId',
			})
		}
	}

	Users.init(
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
		},
		{
			sequelize,
			modelName: 'Users',
		}
	)

	return Users
}
