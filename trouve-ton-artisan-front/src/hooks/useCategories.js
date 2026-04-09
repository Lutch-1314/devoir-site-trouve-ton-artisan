import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      } catch (err) {
        console.error("Erreur lors de la récupération des catégories :", err);
      }
    };

    fetchCategories();
  }, []);

    return categories;
};

export default useCategories;