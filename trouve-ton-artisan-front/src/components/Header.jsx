import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
      <header className="header default-container">
        <div className="header-inner">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Trouve ton Artisan" />
          </Link>

          <Navbar />
        </div>
      </header>
  );
};

export default Header;