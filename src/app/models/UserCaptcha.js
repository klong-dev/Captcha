const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;

const UserCaptcha = sequelize.define(
  "user_captcha",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      defaultValue: 0
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    remain: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  },
  {
    timestamps: false,
  }
);

module.exports = UserCaptcha;
