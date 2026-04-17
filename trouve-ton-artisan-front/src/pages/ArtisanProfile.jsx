import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtisanProfile = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:3000/api/artisans/${id}`)
      .then(res => res.json())
      .then(data => setArtisan(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!artisan) {
    return <p>Chargement...</p>;
  }

  return (
    <h1>{artisan?.nom}</h1>
  );
};

export default ArtisanProfile;