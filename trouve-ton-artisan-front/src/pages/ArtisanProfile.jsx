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
    <>
      <section className="section artisan-infos-profile">
        <div className="default-container">
        
          <h1>{artisan.nom}</h1>

          <img 
            src={`http://localhost:3000/images/artisans/${id}.jpg`}
            alt={artisan.nom}
            className="artisan-img"
          />

        </div>
      </section>

      <section className="section about">
        <div className="default-container">

          <h2>À propos</h2>
        </div>
      </section>

      <section className="section contact">
        <div className="default-container">

          <h2>Contact</h2>

        </div>
      </section>
    </>


  );
};

export default ArtisanProfile;