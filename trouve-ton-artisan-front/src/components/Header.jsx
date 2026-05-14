import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.webp";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header default-container">
      <Link to="/" aria-label="Retour à l'accueil">
        <img
          className="logo"
          src={logo}
          alt="Trouve ton Artisan"
          width="500"
          height="300"
          fetchPriority="high"
          loading="eager"
        />
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
