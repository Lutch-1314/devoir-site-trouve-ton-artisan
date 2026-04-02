import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const categories = ["Bâtiment", "Services", "Fabrication", "Alimentation"];

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
            <li className="nav-item d-flex align-items-center" key={cat}>
              <NavLink className="p-4" to={`/artisans?categorie=${cat}`}>
                {cat}
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