const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('google_oauth_test', 'postgres', 'ariyogi', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;