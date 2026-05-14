const { Artisan, Categorie } = require("../models");

exports.getHomeData = async () => {
  const [categories, topArtisans, artisans] = await Promise.all([
    Categorie.findAll(),
    Artisan.findAll({
      where: { top: true },
    }),
    Artisan.findAll({
      attributes: ["id", "nom"],
    }),
  ]);

  return {
    categories,
    topArtisans,
    artisans,
  };
};
