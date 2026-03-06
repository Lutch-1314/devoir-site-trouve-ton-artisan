import logo from "../assets/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo Trouve ton Artisan" />
            <Navbar />
        </header>
    );
};

export default Header;