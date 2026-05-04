const API_URL = "http://localhost:3000/api";

/* ARTISANS */

export const getAllArtisans = async () => {
  const res = await fetch(`${API_URL}/artisans/noms`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des artisans");
  }

  return res.json();
};

export const getArtisansByCategory = async (categorieId) => {
  const res = await fetch(`${API_URL}/artisans?categorie=${categorieId}`);

  if (!res.ok) throw new Error("Erreur lors de la récupération des artisans");

  return res.json();
};

export const getArtisanById = async (id) => {
  const res = await fetch(`${API_URL}/artisans/${id}`);

  if (!res.ok) throw new Error("Erreur lors de la récupération de l'artisan");

  return res.json();
};

export const getTopArtisans = async () => {
  const res = await fetch(`${API_URL}/artisans/top`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des artisans");
  }

  return res.json();
};

/* CATEGORIES */

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des catégories");
  }

  return res.json();
};
