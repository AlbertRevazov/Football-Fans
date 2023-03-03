"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      this.belongsTo(Users, { foreignKey: "user_id" });
      // define association here
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
