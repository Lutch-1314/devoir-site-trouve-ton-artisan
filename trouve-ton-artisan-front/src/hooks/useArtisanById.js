import { useState, useEffect } from "react";

const useArtisanById = (id) => {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { artisan, loading };
};

export default useArtisanById;
