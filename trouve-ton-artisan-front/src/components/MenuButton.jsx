import { useState } from "react";
import menuIcon from "../assets/icons/menu.svg";

function MenuButton() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="menu">
      <button
        className="menu-action"
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