import { useState, useEffect } from "react";

import { getArtisanById } from "../services/api";

const useArtisanById = (id) => {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    getArtisanById(id)
      .then((data) => {
        if (isMounted) setArtisan(data);
      })
      .catch(console.error)
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { artisan, loading };
};

export default useArtisanById;
