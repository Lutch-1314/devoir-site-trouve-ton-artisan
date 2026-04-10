import menuIcon from "../assets/icons/menu.svg";
import crossIcon from "../assets/icons/cross.svg";

function MenuButton({ toggleMenu, isOpen }) {
  return (
    <div className="menu">
      <button
        className={`menu-action ${isOpen ? "open" : ""}`}
        type="button"
        onClick={toggleMenu}
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