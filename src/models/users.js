
const { DataTypes } = require("sequelize");
const { connection } = require("../config/database");


const Users = connection.define(
    "Users",
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
            unique: "username",
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: "email",
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Fullname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        
    },
    {
      connection,
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
            name: "fullName",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "fullName" },
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
          {
            name: "phone",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "phone" },
            ]
          },
          {
            name: "address",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "address" },
            ]
          },
          
        ]

    }
    );

module.exports = Users;
