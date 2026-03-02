const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ville = sequelize.define('Ville', {
  id_ville: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'ville',
  timestamps: false
});

module.exports = Ville;