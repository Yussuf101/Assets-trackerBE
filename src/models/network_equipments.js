const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Network_Equipments = sequelize.define(
    "Network_Equipments",
    {
        Assets_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Asset_label: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        Assets_category: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        Location:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        State: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Collection_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Return_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },{
        sequelize,
        tableName: 'Network_Equipments',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Assets_id" },
            ]
          },
          {
            name: "Assets_label",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Assets_label" },
            ]
          },
          {
            name: "Assets_Category",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Assets_Category" },
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
            name: "Model",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Model" },
            ]
          },
          {
            name: "State",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "State" },
            ]
          },
          {
            name: "Collection_date",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Collection_date" },
            ]
          },
          {
            name: "Return_date",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Return_date" },
            ]
          },
        ]
    });

module.exports = Network_Equipments;
