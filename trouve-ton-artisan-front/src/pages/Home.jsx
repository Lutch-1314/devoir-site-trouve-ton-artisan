import TopArtisans from "../components/TopArtisans";

const Home = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h1>Comment trouver mon artisan ?</h1>
          <p>
            1. Choisir la catégorie d'artisanat dans le menu.
            2. Choisir un artisan.
            3. Le contacter via le formulaire de contact.
            4. Une réponse sera apportée sous 48h.
          </p>
        </div>
      </section>
      
      <TopArtisans />

    </main>
  );
};

export default Home;