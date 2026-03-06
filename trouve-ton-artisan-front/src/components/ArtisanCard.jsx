const ArtisanCard = ({ artisan }) => {
  return (
    <div className="artisan-card">

      <h3>{artisan.nom}</h3>

      <p>{artisan.specialite}</p>

      <p>{artisan.ville}</p>

      <p>{artisan.note}</p>

    </div>
  );
};

export default ArtisanCard;