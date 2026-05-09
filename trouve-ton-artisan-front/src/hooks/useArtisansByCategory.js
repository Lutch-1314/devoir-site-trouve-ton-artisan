import { useEffect, useState } from "react";

import { getArtisansByCategory } from "../services/api";

const useArtisansByCategory = (categorieId) => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorieId) return;

    let isMounted = true;

    getArtisansByCategory(categorieId)
      .then((data) => {
        if (isMounted) setArtisans(data);
      })
      .catch(console.error)
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categorieId]);

  return { artisans, loading };
};

export default useArtisansByCategory;