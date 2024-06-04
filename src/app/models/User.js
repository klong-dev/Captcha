const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const autoGeneratedToken = require("../../middleware/CreateUserID");
const sequelize = db.sequelize;
const User = sequelize.define(
  "user",
    {
    uid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
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
    hooks: {
      beforeCreate: async (user) => {
        user.uid = await autoGeneratedToken();
      },
    },
  }
);

module.exports = User;
