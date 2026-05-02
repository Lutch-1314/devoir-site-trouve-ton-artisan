import { Helmet } from "react-helmet-async";
import TopArtisans from "../components/TopArtisans";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trouve ton artisan - Accueil</title>
        <meta name="description" content="Trouvez facilement un artisan qualifié en Auvergne-Rhône-Alpes." />
      </Helmet>

      <section className="section main-section">
        <div className="default-container">
          <h1 className="title-deco red">Comment trouver mon artisan ?</h1>

          <div className="section-divider"></div>

          <ol className="steps">
            <li>Choisir la catégorie d'artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </div>
      </section>
      
      <TopArtisans />
    </>
  );
};

export default Home;