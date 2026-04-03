const express = require('express');
const router = express.Router();
const { Artisan, Specialite, Ville, Categorie } = require('../models');

// Route pour récupérer **tous les noms d'artisans** (liste déroulante)
router.get('/noms', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      attributes: ['nom'], // Seulement les noms
      order: [['nom', 'ASC']]
    });
    res.json(artisans.map(a => a.nom)); // Renvoie un tableau de noms simples
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET /api/artisans/top
router.get('/top', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },

      // 🔹 ATTRIBUTES = colonnes de la table Artisan
      attributes: ['id_artisan','nom', 'note'],

      // 🔹 INCLUDE = relations (autres tables liées)
      include: [
        {
          model: Specialite,
          attributes: ['nom']
        },
        {
          model: Ville,
          attributes: ['nom']
        }
      ],

      limit: 3
    });

    // On formate la réponse pour le frontend
    res.json(
      artisans.map(a => ({
        id_artisan: a.id_artisan,
        nom: a.nom,
        note: a.note,
        specialite: a.Specialite.nom,
        ville: a.Ville.nom
      }))
    );

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route pour récupérer la **fiche complète d’un artisan** par id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const artisan = await Artisan.findByPk(id, { // 🔹 findByPk = find by primary key
      attributes: ['nom', 'note', 'a_propos', 'site_web', 'email'], // email inclus mais non affiché côté front
      include: [
        {
          model: Specialite,
          attributes: ['nom'],
          include: [{ model: Categorie, attributes: ['nom'] }]
        },
        {
          model: Ville,
          attributes: ['nom']
        }
      ]
    });

    if (!artisan) return res.status(404).json({ error: 'Artisan non trouvé' });

    // Formatage JSON pour le front
    res.json({
      nom: artisan.nom,
      note: artisan.note,
      a_propos: artisan.a_propos,
      site_web: artisan.site_web,
      email: artisan.email, // caché côté frontend pour le formulaire
      specialite: artisan.Specialite.nom,
      categorie: artisan.Specialite.Categorie.nom,
      ville: artisan.Ville.nom
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET /api/artisans?categorie=...
router.get('/', async (req, res) => {
  try {
    const { categorie } = req.query; // ex: /api/artisans?categorie=Bâtiment

    let includeCategorie = {};
    if (categorie) {
      includeCategorie = {
        model: Categorie,
        where: { id_categorie: categorie },
        attributes: []
      };
    } else {
      includeCategorie = {
        model: Categorie,
        attributes: []
      };
    }

    const artisans = await Artisan.findAll({
      attributes: ['nom', 'note'], // ce que tu veux afficher dans la liste
      include: [
        {
          model: Specialite,
          attributes: ['nom'],
          include: [includeCategorie]
        },
        {
          model: Ville,
          attributes: ['nom']
        }
      ]
    });

    // Formattage pour le frontend
    res.json(
      artisans.map(a => ({
        nom: a.nom,
        note: a.note,
        specialite: a.Specialite.nom,
        ville: a.Ville.nom
      }))
    );

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;