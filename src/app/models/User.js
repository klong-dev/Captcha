const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const User = sequelize.define(
  "user",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true, // Sử dụng timestamps để tự động thêm cột createdAt và updatedAt
  }
);

module.exports = User;
