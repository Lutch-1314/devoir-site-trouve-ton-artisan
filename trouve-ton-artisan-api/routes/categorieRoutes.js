const express = require('express');
const router = express.Router();
const { Categorie } = require('../models'); // ton models/index.js

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      attributes: ['id_categorie', 'nom'] // on ne prend que ce qu'on veut
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;