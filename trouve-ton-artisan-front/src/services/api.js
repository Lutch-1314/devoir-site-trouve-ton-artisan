const API_URL = "http://localhost:3000/api";

export const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  return res.json();
};

export const getTopArtisans = async () => {
  const res = await fetch(`${API_URL}/artisans/top`);

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des artisans");
  }

  return res.json();
};