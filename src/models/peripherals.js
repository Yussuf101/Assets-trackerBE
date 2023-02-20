const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Peripherals = sequelize.define(
    "Peripherals",
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
            unique: false,
        },
        Location:{
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
        Assigned_Username: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigned_location: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigned_address: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigned_email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        Assigned_phone: {
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
    }, {
        sequelize,
        tableName: 'Peripherals',
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
              name: "Assigned_To",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigned_To" },
              ]
            },
            {
              name: "Assigned_To_fullName",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigned_To_fullName " },
              ]
            },
            {
              name: "Assigned_To_location",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigned_To_Location" },
              ]
            },
            {
              name: "Assigned_To_address",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assigned_To_address" },
              ]
            },
            {
              name: "Assigend_To_email",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assiged_To_email" },
              ]
            },
            {
              name: "Assigend_To_phone",
              unique: false,
              using: "BTREE",
              fields: [
                { name: "Assiged_To_phone" },
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
    },
    
);

module.exports = Peripherals;
