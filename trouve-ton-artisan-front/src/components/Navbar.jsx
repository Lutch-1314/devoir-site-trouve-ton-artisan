import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";
import { getCategories } from "../services/api";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  useEffect(() => {
  document.body.classList.toggle("no-scroll", menuOpen);
}, [menuOpen]);

useEffect(() => {
  const header = document.querySelector(".header");

  const updateHeight = () => {
    const height = header.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  };

  updateHeight();
  window.addEventListener("resize", updateHeight);

  return () => window.removeEventListener("resize", updateHeight);
}, []);

  return (
    <nav className="custom-navbar">

      {/* ligne mobile */}
      <div className="mobile-actions d-flex justify-content-end d-lg-none">
        <SearchBar />
        <MenuButton toggleMenu={toggleMenu} />
      </div>

      {menuOpen && <div className="overlay d-lg-none" onClick={toggleMenu}></div>}

      <div className={`mobile-menu d-lg-none ${menuOpen ? "open" : ""}`}>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id_categorie || cat.id}>
              <NavLink
                to={`/artisans?categorie=${cat.id_categorie || cat.id}`}
                onClick={toggleMenu}
              >
                {cat.nom}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ligne recherche desktop */}
      <div className="desktop-search d-none d-lg-flex ms-auto">
        <SearchBar />
      </div>

      {/* ligne menu desktop */}
      <div className="desktop-menu d-none d-lg-block">
        <ul className="navbar-nav flex-row align-items-center">
          {categories.map((cat, index) => (
            <li className="nav-item d-flex align-items-center" key={cat.id_categorie || cat.id}>
              <NavLink className="p-4" to={`/artisans?categorie=${cat.id_categorie || cat.id}`}>
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