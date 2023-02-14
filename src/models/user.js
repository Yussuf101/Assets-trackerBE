
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");


const User = sequelize.define(
    "User",
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Firstname: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Lastname: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(255),
            defaultValue: 0,
            allowNull: true,
        },
        
    },
    {
        sequelize,
        tableName: 'Users',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "user_id" },
            ]
          },
          {
            name: "username",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "username" },
            ]
          },
          {
            name: "email",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "email" },
            ]
          },
          {
            name: "Firstname",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Firstname" },
            ]
          },
          {
            name: "Lastname",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Lastname" },
            ]
          },
          {
            name: "Location",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Location" },
            ]
          },
          
        ]

    }
    );

module.exports = User;
