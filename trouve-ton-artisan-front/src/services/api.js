const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("VITE_API_URL non défini");
}

const fetchAPI = async (url, options = {}) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || `Erreur ${res.status}`);
  }

  return res.json();
};

export const getCategories = () => fetchAPI(`${API_URL}/api/categories`);

export const getAllArtisans = () => fetchAPI(`${API_URL}/api/artisans/noms`);

export const getArtisansByCategory = (categorieId) =>
  fetchAPI(`${API_URL}/api/artisans?categorie=${categorieId}`);

export const getArtisanById = (id) => fetchAPI(`${API_URL}/api/artisans/${id}`);

export const getTopArtisans = () => fetchAPI(`${API_URL}/api/artisans/top`);

export const sendContactForm = async (id, formData) => {
  return fetch(`${API_URL}/api/artisans/${id}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};
