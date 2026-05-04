import { useEffect, useState } from "react";

import { getTopArtisans } from "../services/api";

const useTopArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const data = await getTopArtisans();
        setArtisans(data);
      } catch (error) {
        console.error("Erreur API :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  return { artisans, loading };
};

export default useTopArtisans;
