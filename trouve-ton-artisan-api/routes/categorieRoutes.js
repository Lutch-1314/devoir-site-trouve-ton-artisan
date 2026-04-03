const express = require('express');
const router = express.Router();
const { Categorie } = require('../models');
const sequelize = require('../db');

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      attributes: ['id_categorie', 'nom'],
      order: sequelize.literal('FIELD(id_categorie, 2, 4, 3, 1)')
    });

    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;