import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header default-container">
      <Link to="/" aria-label="Retour à l'accueil">
        <img className="logo" src={logo} alt="Trouve ton Artisan" />
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
