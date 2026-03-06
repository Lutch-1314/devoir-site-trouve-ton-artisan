const API_URL = "http://localhost:3000/api";

export const getTopArtisans = async () => {
  const response = await fetch(`${API_URL}/artisans/top`);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des artisans");
  }

  return response.json();
};