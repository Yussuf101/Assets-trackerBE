
const { Sequelize } = require("sequelize");

let connection;

if (process.env.NODE_ENV === "Assets-Tracker") {

    module.exports.connection = new Sequelize(`${process.env.DATABASE_URL}?sslmode=require`, {
        url: process.env.DATABASE_URI,  
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    });

} else {
    
    module.exports.connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            // logging: false
        }
    );
}

//  module.exports = connection;