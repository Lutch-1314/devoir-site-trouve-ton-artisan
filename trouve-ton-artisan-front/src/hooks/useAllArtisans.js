import { useState, useEffect } from "react";
import { getAllArtisans } from "../services/api";

const useAllArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllArtisans();
        setArtisans(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { artisans, loading, error };
};

export default useAllArtisans;
