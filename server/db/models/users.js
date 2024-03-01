"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate({ Favourites }) {
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
      favouriteName: DataTypes.STRING,
      favouriteApiId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
