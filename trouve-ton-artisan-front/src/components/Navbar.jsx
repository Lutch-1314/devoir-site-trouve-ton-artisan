import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="d-flex gap-4">
      <Link to="/artisans?categorie=Bâtiment">Bâtiment</Link>
      <Link to="/artisans?categorie=Services">Services</Link>
      <Link to="/artisans?categorie=Fabrication">Fabrication</Link>
      <Link to="/artisans?categorie=Alimentation">Alimentation</Link>

      <SearchBar />
    </nav>
  );
};

export default Navbar;