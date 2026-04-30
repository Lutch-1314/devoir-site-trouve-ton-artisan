import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";

import Rating from "../components/Rating";
import Button from "../components/Button";
import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";

const ArtisansList = () => {
  const categories = useCategories();
  const [searchParams] = useSearchParams();

  const categorieId = searchParams.get("categorie");

  const currentCategory = categories.find(
    (cat) => String(cat.id_categorie || cat.id) === categorieId
  );
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/artisans?categorie=${categorieId}`);
        const data = await response.json();

        setArtisans(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtisans();
  }, [categorieId]);

  const categoryColors = {
    "Bâtiment": "red",
    "Alimentation": "red",
    "Services": "green",
    "Fabrication": "blue",
  };

  const colorClass = currentCategory
    ? categoryColors[currentCategory.nom] || "blue"
    : "blue";

  return (
    <section className="section artisans-by-category">

      <div className="default-container">

        <h1 className={`title-deco ${colorClass} mb-4`}>
          {currentCategory ? currentCategory.nom : "Artisans"}
        </h1>

        <div className="row g-5">
          {artisans.map((artisan) => (
            <div className="col-md-6 col-lg-4" key={artisan.id}>
              <div className="artisan-card p-5 h-100 d-flex flex-column gap-4">
                <h2 className="artisan-name">{artisan.nom}</h2>

                <div className="rating-wrapper">
                  <span className="rating-value">{artisan.note}</span>
                  <Rating value={artisan.note} />
                </div>

                <div className="artisan-infos d-flex flex-column gap-4">
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
                </div>
                  
                <Button link={`/artisans/${artisan.id}`}>
                  Voir la fiche complète <span className="arrow">➔</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisansList;