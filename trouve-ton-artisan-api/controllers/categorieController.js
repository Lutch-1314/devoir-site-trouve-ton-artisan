const categorieService = require('../services/categorieService');

exports.getCategories = async (req, res) => {
  try {
    const categories = await categorieService.getCategories();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};