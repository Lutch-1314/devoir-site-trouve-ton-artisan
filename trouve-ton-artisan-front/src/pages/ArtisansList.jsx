import { useSearchParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";

const ArtisansList = () => {
  const categories = useCategories();
  const [searchParams] = useSearchParams();

  const categorieId = searchParams.get("categorie");

  const currentCategory = categories.find(
    (cat) => String(cat.id_categorie || cat.id) === categorieId
  );

  return (
    <div>
      <h2>
        {currentCategory ? currentCategory.nom : "Artisans"}
      </h2>
    </div>
  );
};

export default ArtisansList;