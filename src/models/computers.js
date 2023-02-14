const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Computer = sequelize.define(
    "Computer",
    {
        Asset_id: {
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
        tableName: 'Monitors',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Asset_id" },
            ]
          },
          {
            name: "Asset_label",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Asset_label" },
            ]
          },
          {
            name: "Asset_Category",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Asset_Category" },
            ]
          },
          {
            name: "Asset_Location",
            unique: false,
            using: "BTREE",
            fields: [
              { name: "Asset_Location" },
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
    }
);

module.exports = Computer;
