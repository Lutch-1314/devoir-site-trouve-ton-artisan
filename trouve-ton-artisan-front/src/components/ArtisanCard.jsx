const ArtisanCard = ({ artisan }) => {
  return (
    <div className="artisan-card">

      <h3>{artisan.nom}</h3>

      <p>{artisan.note}</p>

      <p>{artisan.specialite}</p>

      <p>{artisan.ville}</p>

    </div>
  );
};

export default ArtisanCard;