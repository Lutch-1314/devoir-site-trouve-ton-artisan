const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Categorie = require('./Categorie');

const Specialite = sequelize.define('Specialite', {
  id_specialite: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  id_categorie: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'specialite',
  timestamps: false
});

// Relation Specialite → Categorie
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie' });

module.exports = Specialite;