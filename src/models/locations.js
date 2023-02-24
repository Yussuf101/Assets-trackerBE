const { DataTypes } = require("sequelize");
const { connection } = require("../config/database");

const Locations = connection.define(
    "Locations",
    {
        Location_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Location_name: {
            type: DataTypes.STRING(255),
            require: true,
        },
    },
    {
      connection,
        tableName: 'Location',
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Location_id" },
            ]
          },
          {
            name: "Location_name",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "Location_name" },
            ]
          },
        ]
    }
);

module.exports = Locations;
