import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "../components/Rating";
import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";
import websiteIcon from "../assets/icons/website.svg";

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

          <div className="img-infos-wrapper">
            <img 
              src={`http://localhost:3000/images/artisans/${id}.jpg`}
              alt={artisan.nom}
              className="artisan-img"
            />

            <div className="artisan-infos">
              <div className="rating-wrapper">
                <span className="rating-value">{artisan.note}</span>
                <Rating value={artisan.note} />
              </div>

              <span className="artisan-speciality">
                <img className="artisan-icon"
                    src={artisanIcon}
                    alt="Artisan"
                />
                {artisan.specialite}
              </span>
              
              <span className="artisan-location">
                <img className="location-icon"
                    src={locationIcon}
                    alt="Localisation"
                />
                {artisan.ville}
              </span>

              <span className="artisan-website">
                <img className="website-icon"
                    src={websiteIcon}
                    alt="Site web"
                />
                {artisan.site_web}
              </span>
            </div>
          </div>
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