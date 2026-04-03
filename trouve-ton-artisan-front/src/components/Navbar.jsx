import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import { getCategories } from "../services/api";

const Navbar = () => {
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

  return (
    <nav className="navbar custom-navbar">

      {/* ligne mobile */}
      <div className="mobile-actions d-flex justify-content-end d-lg-none">
        <SearchBar />
        <MenuButton />
      </div>

      {/* ligne recherche desktop */}
      <div className="desktop-search d-none d-lg-flex ms-auto">
        <SearchBar />
      </div>

      {/* ligne menu desktop */}
      <div className="desktop-menu d-none d-lg-block">
        <ul className="navbar-nav flex-row align-items-center">
          {categories.map((cat, index) => (
            <li className="nav-item d-flex align-items-center" key={cat.id_categorie}>
              <NavLink className="p-4" to={`/artisans?categorie=${cat.id_categorie}`}>
                {cat.nom}
              </NavLink>

              {/* séparateur sauf dernier */}
              {index !== categories.length - 1 && (
                <span className="separator"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;