const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,     // e.g., 'mydatabase'
    process.env.DB_USER,     // e.g., 'admin'
    process.env.DB_PASSWORD, // e.g., 'yourpassword'
    {
        host: process.env.DB_HOST, // e.g., 'mydatabase.xxxxxxxxxxxx.us-east-1.rds.amazonaws.com'
        dialect: 'mysql', // or 'postgres'
        logging: false
    }
);

module.exports = sequelize;