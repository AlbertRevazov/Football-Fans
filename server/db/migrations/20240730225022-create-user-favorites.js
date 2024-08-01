'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserFavorites', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			favoriteId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Favorites',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})

		// Добавляем уникальное ограничение на комбинацию userId и favoriteId
		await queryInterface.addConstraint('UserFavorites', {
			fields: ['userId', 'favoriteId'],
			type: 'unique',
			name: 'unique_user_favorite',
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('UserFavorites')
	},
}
