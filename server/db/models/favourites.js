"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    static associate({ Users }) {
      this.belongsTo(Users, { foreignKey: "user_id" });
    }
  }
  Favourites.init(
    {
      apiId: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Favourites",
    }
  );
  return Favourites;
};
