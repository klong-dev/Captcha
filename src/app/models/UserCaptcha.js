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
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    remain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: false, // Sử dụng timestamps để tự động thêm cột createdAt và updatedAt
  }
);

module.exports = UserCaptcha;
