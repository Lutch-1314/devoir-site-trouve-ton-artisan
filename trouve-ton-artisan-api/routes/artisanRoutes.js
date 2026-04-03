const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

router.get('/noms', artisanController.getNomsArtisans);
router.get('/top', artisanController.getTopArtisans);
router.get('/:id', artisanController.getArtisanById);
router.get('/', artisanController.getArtisans);

module.exports = router;