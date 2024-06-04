const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Captcha = sequelize.define(
  "captcha",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT('utf8mb4'),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000
    },
    min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  },
  {
    timestamps: false, // Sử dụng timestamps để tự động thêm cột createdAt và updatedAt
  }
);

module.exports = Captcha;
