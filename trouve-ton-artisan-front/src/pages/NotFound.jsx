const NotFound = () => {
  return (
    <section className="section default-container not-found">
      <h1>ERREUR 404</h1>

      <p>Désolé, mais la page que vous recherchez n'existe pas...</p>

      <img 
        src="/404-image.png"
        alt="Illustration page introuvable" />
    </section>
  );
};

export default NotFound;