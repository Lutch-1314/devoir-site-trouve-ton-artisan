const artisanService = require('../services/artisanService');

exports.getNomsArtisans = async (req, res) => {
  try {
    const noms = await artisanService.getNomsArtisans();
    res.json(noms);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTopArtisans();
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await artisanService.getArtisanById(req.params.id);

    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    res.json(artisan);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getArtisans = async (req, res) => {
  try {
    const categorie = req.query.categorie;

    const artisans = await artisanService.getArtisans(categorie);
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};