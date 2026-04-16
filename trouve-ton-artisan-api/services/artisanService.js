const { Artisan, Specialite, Ville, Categorie } = require('../models');

exports.getNomsArtisans = async () => {
  const artisans = await Artisan.findAll({
    attributes: ['nom'],
    order: [['nom', 'ASC']]
  });

  return artisans.map(a => a.nom);
};

exports.getTopArtisans = async () => {
  const artisans = await Artisan.findAll({
    where: { top: true },
    attributes: ['id_artisan', 'nom', 'note'],
    include: [
      { model: Specialite, attributes: ['nom'] },
      { model: Ville, attributes: ['nom'] }
    ],
    limit: 3
  });

  return artisans.map(a => ({
    id_artisan: a.id_artisan,
    nom: a.nom,
    note: a.note,
    specialite: a.Specialite.nom,
    ville: a.Ville.nom
  }));
};

exports.getArtisanById = async (id) => {
  const artisan = await Artisan.findByPk(id, {
    attributes: ['nom', 'note', 'a_propos', 'site_web', 'email'],
    include: [
      {
        model: Specialite,
        attributes: ['nom'],
        include: [{ model: Categorie, attributes: ['nom'] }]
      },
      { model: Ville, attributes: ['nom'] }
    ]
  });

  if (!artisan) return null;

  return {
    nom: artisan.nom,
    note: artisan.note,
    a_propos: artisan.a_propos,
    site_web: artisan.site_web,
    email: artisan.email,
    specialite: artisan.Specialite.nom,
    categorie: artisan.Specialite.Categorie.nom,
    ville: artisan.Ville.nom
  };
};

exports.getArtisans = async (categorie) => {
  let includeCategorie = {
    model: Categorie,
    attributes: [],
    required: true
  };

  if (categorie) {
    includeCategorie.where = { id_categorie: Number(categorie) };
  }

  const artisans = await Artisan.findAll({
    attributes: ['nom', 'note'],
    include: [
      {
        model: Specialite,
        attributes: ['nom'],
        required: true,
        include: [includeCategorie]
      },
      { model: Ville, 
        attributes: ['nom']
      }
    ]
  });

  return artisans.map(a => ({
    nom: a.nom,
    note: a.note,
    specialite: a.Specialite.nom,
    ville: a.Ville.nom
  }));
};