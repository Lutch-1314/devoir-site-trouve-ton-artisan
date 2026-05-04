import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import useBodyScrollLock from "../hooks/useBodyScrollLock";
import useCategories from "../hooks/useCategories";
import useClickOutside from "../hooks/useClickOutside";
import useEscapeKey from "../hooks/useEscapeKey";

import MenuButton from "./MenuButton";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const categories = useCategories();

  useBodyScrollLock(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  useEscapeKey(() => {
    if (menuOpen) setMenuOpen(false);
  });

  return (
    <nav
      className={`custom-navbar ms-auto ${menuOpen ? "menu-open" : ""}`}
      aria-label="Navigation principale"
    >
      {/* ligne mobile */}
      <div className="mobile-actions d-flex align-items-center gap-2 d-lg-none">
        <button
          className="search-toggle"
          onClick={toggleSearch}
          aria-label="Ouvrir la recherche"
          aria-expanded={searchOpen}
        >
          <SearchIcon />
        </button>

        <MenuButton
          toggleMenu={toggleMenu}
          isOpen={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        />
      </div>

{(searchOpen || menuOpen) && (
  <div
    className="overlay"
    onClick={() => {
      setSearchOpen(false);
      setMenuOpen(false);
    }}
    aria-hidden="true"
  />
)}
{searchOpen && (
  <div className="mobile-search d-lg-none">
    <SearchBar onSelect={() => setSearchOpen(false)} />
  </div>
)}

     

      <div
        ref={menuRef}
        className={`mobile-menu d-lg-none ${menuOpen ? "open" : ""}`}
        aria-label="Menu mobile"
      >
        <ul>
          {categories.map((cat) => (
            <li key={cat.id_categorie || cat.id}>
              <NavLink
                to={`/artisans?categorie=${cat.id_categorie || cat.id}`}
                onClick={toggleMenu}
                aria-label={`Catégorie ${cat.nom}`}
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
      <div
        className="desktop-menu d-none d-lg-block"
        aria-label="Menu principal"
      >
        <ul className="navbar-nav flex-row align-items-center">
          {categories.map((cat, index) => (
            <li
              className="nav-item d-flex align-items-center"
              key={cat.id_categorie || cat.id}
            >
              <NavLink
                className="p-4"
                to={`/artisans?categorie=${cat.id_categorie || cat.id}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
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
