const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const UserCaptcha = require("./UserCaptcha");

const UserToken = sequelize.define(
  "user_token",
  {
    uid: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

module.exports = UserToken;
