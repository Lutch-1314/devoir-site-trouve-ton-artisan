const { Categorie } = require('../models');
const sequelize = require('../db');

exports.getCategories = async () => {
  const categories = await Categorie.findAll({
    attributes: ['id_categorie', 'nom'],
    order: [
      [sequelize.literal("FIELD(id_categorie, 2, 4, 3, 1)")]
    ]
  });

  // On renvoie juste les infos utiles au front
  return categories.map(c => ({
    id: c.id_categorie,
    nom: c.nom
  }));
};