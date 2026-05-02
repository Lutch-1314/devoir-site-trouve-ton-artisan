import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import artisanIcon from "../assets/icons/artisan.svg";
import locationIcon from "../assets/icons/location.svg";
import websiteIcon from "../assets/icons/website.svg";
import Rating from "../components/Rating";
import Button from "../components/Button";

const ArtisanProfile = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/artisans/${id}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Erreur envoi");

      setStatus("success");
      form.reset(); // reset du form
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!artisan) {
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
                src={`http://localhost:3000/images/artisans/${id}.jpg`}
                alt={`Photo de l'artisan ${artisan.nom}`}
                className="artisan-img"
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
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="email" name="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="subject" name="subject" className="form-label">
                Objet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-field mb-4">
              <label htmlFor="message" name="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            {status === "success" && (
              <p className="form-success" role="status" aria-live="polite">
                Message envoyé avec succès !
              </p>
            )}

            {status === "error" && (
              <p className="form-error" role="status" aria-live="polite">
                Une erreur est survenue.
              </p>
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
