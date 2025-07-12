const { Sequelize } = require('sequelize');

// SQLite configuration (replace with MySQL/PostgreSQL as needed)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// For MySQL/PostgreSQL, use:
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql' // or 'postgres'
// });

module.exports = sequelize;