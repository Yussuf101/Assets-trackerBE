const { DataTypes } = require("sequelize");
const { connection} = require("../config/database");

const Cable_Connectors = connection.define(
    "Cable_Connectors",
    {
        Asset_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Assets_label: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        Assets_category: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: "Cable Connector",
        },
        Assets_Location:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Assigned_To: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Assigner_fullname: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigner_location: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigner_address: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigner_email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigner_phone: {
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
      connection,
        tableName: 'Cable Connectors',
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
              name: "Assets_label",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "Assets_label" },
              ]
            },
            {
              name: "Assets_category",
              unique: "Cable Connector",
              using: "BTREE",
              fields: [
                { name: "Assets_category" },
              ]
            },
            {
              name: "Assets_Location",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assets_Location" },
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
              name: "Assigned_To",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigned_To" },
              ]
            },
            {
              name: "Assigner_fullname",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigner_fullname" },
              ]
            },
            {
              name: "Assigner_location",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigner_Location" },
              ]
            },
            {
              name: "Assigner_address",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigner_address" },
              ]
            },
            {
              name: "Assigner_email",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigner_email" },
              ]
            },
            {
              name: "Assigner_phone",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigner_phone" },
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

module.exports = Cable_Connectors;
