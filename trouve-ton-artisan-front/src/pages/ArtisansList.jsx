import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";

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

        <h1 className={`title-deco ${colorClass}`}>
          {currentCategory ? currentCategory.nom : "Artisans"}
        </h1>

        <div className="row">
          {artisans.map((artisan) => (
            <div className="col-md-4 mb-4" key={artisan.id}>
              <div className="artisan-card p-3 h-100 d-flex flex-column justify-content-between">

                <div>
                  <h5 className="artisan-name">{artisan.nom}</h5>

                  <p className="artisan-note">⭐ {artisan.note}/5</p>

                  <p className="artisan-specialite">
                    {artisan.specialite}
                  </p>

                  <p className="artisan-ville text-muted">
                    📍 {artisan.ville}
                  </p>
                </div>

                <button className="btn btn-link mt-3 text-start p-0">
                  Voir la fiche complète →
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisansList;