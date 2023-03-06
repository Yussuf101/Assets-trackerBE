const { DataTypes } = require("sequelize");
const { connection } = require("../config/database");

const Test = connection.define(
    "Test",
    {
        Test_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            require: true,
        },
    },
);



// const main = async () => {
//     try {
//         await Test.sync({alter: true});
//     } catch (error) {
//         console.log(error);
//     }
// };

// main();

module.exports = Test;