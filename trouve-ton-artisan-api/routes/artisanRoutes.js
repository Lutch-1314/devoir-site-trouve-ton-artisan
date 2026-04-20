const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');
const contactController = require('../controllers/contactController');

router.get('/noms', artisanController.getNomsArtisans);
router.get('/top', artisanController.getTopArtisans);
router.get('/:id', artisanController.getArtisanById);
router.get('/', artisanController.getArtisans);

router.post('/:id/contact', contactController.sendMessage);

module.exports = router;