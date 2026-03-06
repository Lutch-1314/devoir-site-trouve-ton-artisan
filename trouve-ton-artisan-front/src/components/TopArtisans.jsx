import { useEffect, useState } from "react";
import { getTopArtisans } from "../services/api";

const TopArtisans = () => {

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchArtisans = async () => {
      try {
        const data = await getTopArtisans();
        setArtisans(data);
      } catch (error) {
        console.error("Erreur API :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();

  }, []);

  if (loading) {
    return <p>Chargement des artisans...</p>;
  }


  return (
    <section className="top-artisans">

      <div className="container">

        <h2>Les 3 artisans du mois</h2>

        <div id="artisanCarousel" className="carousel slide">

          <div className="carousel-inner">

            {artisans.map((artisan, index) => (

              <div
                key={artisan.id_artisan}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >

                <div className="artisan-card text-center">

                  {/* compteur */}
                  <p className="artisan-position">
                    {index + 1}/{artisans.length}
                  </p>

                  <h3>{artisan.nom}</h3>
                  
                  <p>{artisan.specialite}</p>
                  <p>{artisan.ville}</p>
                  <p>⭐ {artisan.note}</p>

                </div>

              </div>

            ))}

          </div>

          {/* bouton précédent */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#artisanCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* bouton suivant */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#artisanCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default TopArtisans;