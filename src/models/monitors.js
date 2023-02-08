const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Monitors = sequelize.define(
    "Monitors",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Asset_label: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Assets_category: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Location_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
    },
    { timestamps: false }
);

module.exports = Monitors;
