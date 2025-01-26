const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('capx', 'postgres', 'Akshitha@22', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, 
});

module.exports = sequelize;