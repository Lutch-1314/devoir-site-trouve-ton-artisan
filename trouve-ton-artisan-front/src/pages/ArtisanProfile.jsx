import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import useArtisanById from "../hooks/useArtisanById";
import useContactForm from "../hooks/useContactForm";

import Button from "../components/Button";
import Rating from "../components/Rating";

import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";
import websiteIcon from "../assets/icons/website.svg";

const ArtisanProfile = () => {
  const { id } = useParams();
  const { artisan, loading } = useArtisanById(id);
  const { status, handleSubmit } = useContactForm(id);

  const API_URL = import.meta.env.VITE_API_URL;

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <Helmet>
        <title>{artisan.nom} - Trouve ton artisan</title>
        <meta
          name="description"
          content={`${artisan.nom}, ${artisan.specialite} situé à ${artisan.ville}. Consultez sa fiche et contactez cet artisan facilement.`}
        />
      </Helmet>

      <section className="section artisan-infos-profile">
        <div className="default-container">
          <h1>{artisan.nom}</h1>

          <div className="artisan-card-profile">
            <div className="artisan-img-wrapper">
              <img
                src={`${API_URL}/images/artisans/${id}.webp`}
                alt={`Photo de l'artisan ${artisan.nom}`}
                className="artisan-img"
                width="800"
                height="500"
              />
            </div>
            <div className="artisan-profile-infos">
              <div className="rating-wrapper">
                <span className="rating-value">{artisan.note}</span>
                <Rating value={artisan.note} />
              </div>

              <span className="artisan-speciality">
                <img
                  className="artisan-icon"
                  src={artisanIcon}
                  alt=""
                  aria-hidden="true"
                />
                {artisan.specialite}
              </span>

              <span className="artisan-location">
                <img
                  className="location-icon"
                  src={locationIcon}
                  alt=""
                  aria-hidden="true"
                />
                {artisan.ville}
              </span>

              {artisan.site_web && (
                <span className="artisan-website">
                  <img
                    className="website-icon"
                    src={websiteIcon}
                    alt=""
                    aria-hidden="true"
                  />
                  <a
                    href={artisan.site_web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Site web de ${artisan.nom}`}
                  >
                    {artisan.site_web}
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="default-container">
          <h2 className="title-deco red" id="about-title">
            À propos
          </h2>

          <p>{artisan.a_propos}</p>
        </div>
      </section>

      <section className="section contact" aria-labelledby="contact-title">
        <div className="default-container">
          <h2 className="title-deco green" id="contact-title">
            Contact
          </h2>

          <form className="contact-form" onSubmit={handleSubmit} action="">
            <div className="form-field mb-4 ">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="subject" className="form-label">
                Objet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-control"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
                autoComplete="off"
              ></textarea>
            </div>

            {status === "success" && (
              <p className="form-success" role="status" aria-live="polite">
                Message envoyé avec succès !
              </p>
            )}

            {status && status !== "success" && (
              <p className="form-error">{status}</p>
            )}

            <Button variant="blue" type="submit">
              Envoyer
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ArtisanProfile;
