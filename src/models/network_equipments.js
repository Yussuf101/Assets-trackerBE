const { DataTypes } = require("sequelize");
const { connection } = require("../config/database");

const Network_Equipments = connection.define(
    "Network_Equipments",
    {
        Asset_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Asset_label: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: "Asset_label",
        },
        Assets_category: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: "Network Equipment",
        },
        Assets_Location:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        CableConnector_id: {
          type: DataTypes.INTEGER,
          foreignKey: true,
          unique:"CableConnector",
        },
        Monitor_id: {
          type: DataTypes.INTEGER,
          foreignKey: true,
          unique: "Monitor_id",
        },
        Computer_id: {
          type: DataTypes.INTEGER,
          foreignKey: true,
          unique: "Computer_id",
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
        tableName: 'Network_Equipments',
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
              name: "Assets_Category",
              unique: "Network Equipment",
              using: "BTREE",
              fields: [
                { name: "Assets_Category" },
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
              name: "PRIMARY",
              unique: "CableConnector_id",
              using: "BTREE",
              fields: [
                { name: "CableConnector_id" },
              ]
            },
            {
              name: "PRIMARY",
              unique: "Monitor_id",
              using: "BTREE",
              fields: [
                { name: "Monitor_id" },
              ]
            },
            {
              name: "PRIMARY",
              unique: "Computer_id",
              using: "BTREE",
              fields: [
                { name: "Computer_id" },
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
    });

module.exports = Network_Equipments;
