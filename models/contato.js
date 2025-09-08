const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contato = sequelize.define('Contato', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Garante que cada e-mail seja único
  }
}, {
  timestamps: false // Desativa a criação automática de campos 'createdAt' e 'updatedAt'
});

module.exports = Contato;
