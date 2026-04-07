import menuIcon from "../assets/icons/menu.svg";

function MenuButton({ toggleMenu }) {
  return (
    <div className="menu">
      <button
        className="menu-action"
        type="button"
        onClick={toggleMenu}
      >
        <img className="menu-icon"
          src={menuIcon}
          alt="Menu"
        />
        <span className="menu-text">
          Menu
        </span>
      </button>
    </div>
  );
}

export default MenuButton;