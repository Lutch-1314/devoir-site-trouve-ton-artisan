import { useEffect, useState } from "react";

import { getTopArtisans } from "../services/api";

const useTopArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getTopArtisans()
      .then((data) => {
        if (isMounted) setArtisans(data);
      })
      .catch((error) => {
        console.error("Erreur API :", error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { artisans, loading };
};

export default useTopArtisans;