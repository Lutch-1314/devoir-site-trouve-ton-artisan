import TopArtisans from "../components/TopArtisans";

const Home = () => {
  return (
    <main className="main">
      <section className="main-section">
        <div className="container container-fluid">
          <h1>Comment trouver mon artisan ?</h1>

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

    </main>
  );
};

export default Home;