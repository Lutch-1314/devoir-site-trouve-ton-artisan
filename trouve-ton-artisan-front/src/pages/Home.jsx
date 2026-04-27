import TopArtisans from "../components/TopArtisans";

const Home = () => {
  return (
    <>
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