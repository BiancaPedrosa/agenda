const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('restaurante', 'root', 'ifsp', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;
