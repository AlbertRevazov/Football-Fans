"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Favourites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      apiId: { allowNull: false, type: Sequelize.INTEGER },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      name: { allowNull: false, type: Sequelize.STRING, unique: true },
      img: { allowNull: false, type: Sequelize.STRING },
      isFavourite: { allowNull: false, type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Favourites");
  },
};
