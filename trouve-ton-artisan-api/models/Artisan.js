const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Specialite = require('./Specialite');
const Ville = require('./Ville');

const Artisan = sequelize.define('Artisan', {
  id_artisan: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  note: { type: DataTypes.FLOAT, allowNull: false },
  a_propos: { type: DataTypes.TEXT },
  email: { type: DataTypes.STRING },
  site_web: { type: DataTypes.STRING },
  top: { type: DataTypes.BOOLEAN },
  id_specialite: { type: DataTypes.INTEGER, allowNull: false },
  id_ville: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'artisan',
  timestamps: false
});

// Relations Artisan → Specialite et Ville
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite' });
Artisan.belongsTo(Ville, { foreignKey: 'id_ville' });

module.exports = Artisan;