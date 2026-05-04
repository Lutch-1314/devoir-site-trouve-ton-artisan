import { useEffect, useState } from "react";

const useArtisansByCategory = (categorieId) => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    if (!categorieId) return;

    const fetchArtisans = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/artisans?categorie=${categorieId}`
        );
        const data = await response.json();
        setArtisans(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtisans();
  }, [categorieId]);

  return artisans;
};

export default useArtisansByCategory;
