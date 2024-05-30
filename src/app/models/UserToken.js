const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const UserCaptcha = require("./UserCaptcha");

const UserToken = sequelize.define(
  "user_token",
  {
    token: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = UserToken;
