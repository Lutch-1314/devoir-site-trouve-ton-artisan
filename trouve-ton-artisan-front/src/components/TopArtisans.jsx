import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";
import Rating from "./Rating";
import Button from "./Button";

import useTopArtisans from "../hooks/useTopArtisans";

const TopArtisans = () => {
  const { artisans, loading } = useTopArtisans();

  if (loading) {
    return <p>Chargement des artisans...</p>;
  }

  return (
    <section className="section top-artisans">

      <div className="default-container">

        <h2 className="title-deco green">Les 3 artisans du mois</h2>

        <div id="artisanCarousel" className="carousel slide">

          <div className="carousel-inner">

            {artisans.map((artisan, index) => (

              <div
                key={artisan.id_artisan}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="artisan-top">

                  <p className="artisan-position h3 fw-bold">
                    {index + 1}/{artisans.length}
                  </p>

                  <h3>{artisan.nom}</h3>
                  
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
                  </div>

                  <Button variant="white" link={`/artisans/${artisan.id}`}>
                    Voir la fiche
                  </Button>

                </div>
                
              </div>
              
            ))}
            
          </div>
          <div className="carousel-controls">   
            <button
              className="custom-carousel-btn"
              type="button"
              data-bs-target="#artisanCarousel"
              data-bs-slide="prev"
            >
              <img src={arrowLeft} alt="Précédent" />
            </button>
            <button
              className="custom-carousel-btn"
              type="button"
              data-bs-target="#artisanCarousel"
              data-bs-slide="next"
            >
              <img src={arrowRight} alt="Suivant" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopArtisans;