"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const admin = [
      {
        name: "Albert",
        lastName: "Revazov",
        phone: "8 999 999 99 99",
        email: "abe@bk.ru",
        password: await bcrypt.hash(
          process.env.ADMIN_PASS,
          Number(process.env.CRYPT_ROUNDS)
        ),
        role: "admin",
        image: "https://avatars.githubusercontent.com/u/102243637?v=4",
        favouriteName: "",
        favouriteApiId: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", admin);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null);
  },
};
