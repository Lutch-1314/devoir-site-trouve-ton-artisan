import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton";

const Navbar = () => {
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
        <ul className="navbar-nav flex-row">
                  <li className="nav-item">
                    <NavLink className="p-2" to="/artisans?categorie=Bâtiment">Bâtiment</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="p-2" to="/artisans?categorie=Services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="p-2" to="/artisans?categorie=Fabrication">Fabrication</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="p-2" to="/artisans?categorie=Alimentation">Alimentation</NavLink>
                  </li>
                </ul>
              </div>
    </nav>
  );
};

export default Navbar;