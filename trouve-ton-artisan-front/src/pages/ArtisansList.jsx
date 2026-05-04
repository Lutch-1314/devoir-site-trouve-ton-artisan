import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useArtisansByCategory from "../hooks/useArtisansByCategory";

import Rating from "../components/Rating";
import Button from "../components/Button";
import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";

const ArtisansList = () => {
  const categories = useCategories();
  const [searchParams] = useSearchParams();
  const categorieId = searchParams.get("categorie");
  const artisans = useArtisansByCategory(categorieId);

  const currentCategory = categories?.find(
    (cat) => String(cat.id_categorie || cat.id) === categorieId
  );

  const pageTitle = currentCategory
    ? `${currentCategory.nom} - Trouve ton artisan`
    : "Artisans - Trouve ton artisan";

  const pageDescription = currentCategory
    ? `Découvrez les artisans de la catégorie ${currentCategory.nom} en Auvergne-Rhône-Alpes.`
    : "Découvrez les artisans en Auvergne-Rhône-Alpes.";

  const categoryColors = {
    Bâtiment: "red",
    Alimentation: "red",
    Services: "green",
    Fabrication: "blue",
  };

  const colorClass = currentCategory
    ? categoryColors[currentCategory.nom] || "blue"
    : "blue";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <section className="section artisans-by-category">
        <div className="default-container">
          <h1 className={`title-deco ${colorClass} mb-4`}>
            {currentCategory ? currentCategory.nom : "Artisans"}
          </h1>

          <ul className="row g-5 list-unstyled">
            {artisans.map((artisan) => (
              <li className="col-md-6 col-lg-4" key={artisan.id}>
                <div className="artisan-card p-5 h-100 d-flex flex-column gap-4">
                  <h2 className="artisan-name">{artisan.nom}</h2>

                  <div className="rating-wrapper">
                    <span className="rating-value">{artisan.note}</span>
                    <Rating value={artisan.note} />
                  </div>

                  <div className="artisan-infos d-flex flex-column gap-4">
                    <span className="artisan-speciality">
                      <img
                        className="artisan-icon"
                        src={artisanIcon}
                        alt="Spécialité"
                      />
                      {artisan.specialite}
                    </span>

                    <span className="artisan-location">
                      <img
                        className="location-icon"
                        src={locationIcon}
                        alt="Ville"
                      />
                      {artisan.ville}
                    </span>
                  </div>

                  <Button
                    link={`/artisans/${artisan.id}`}
                    aria-label={`Voir la fiche de ${artisan.nom}`}
                  >
                    Voir la fiche complète <span className="arrow">➔</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ArtisansList;
