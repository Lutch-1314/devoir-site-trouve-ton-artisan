import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Erreur 404 - Page introuvable</title>
        <meta
          name="description"
          content="La page demandée est introuvable sur Trouve ton artisan."
        />
      </Helmet>

      <section className="section default-container not-found">
        <h1>ERREUR 404</h1>

        <p>Désolé, mais la page que vous recherchez n'existe pas...</p>

        <img src="/404-image.png" alt="Illustration page introuvable" />
      </section>
    </>
  );
};

export default NotFound;
