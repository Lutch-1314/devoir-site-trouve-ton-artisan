import menuIcon from "../assets/icons/menu.svg";
import crossIcon from "../assets/icons/cross.svg";

const MenuButton = ({ toggleMenu, isOpen }) => {
  return (
    <div className="menu">
      <button
        className={`menu-action ${isOpen ? "active" : ""}`}
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <img className="menu-icon"
          src={isOpen ? crossIcon : menuIcon}
          alt={isOpen ? "" : "Menu"}
        />
       
        {!isOpen && (
          <span className="menu-text">
            Menu
          </span>
        )}
      </button>
    </div>
  );
}

export default MenuButton;