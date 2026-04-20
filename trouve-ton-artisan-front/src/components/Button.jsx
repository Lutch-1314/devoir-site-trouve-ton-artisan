import { Link } from "react-router-dom";

const Button = ({
  children,
  link,
  variant = "blue",
  type = "button",
  onClick,
}) => {
  const className = `btn-artisan btn-${variant}`;

  // 👉 Si on a un lien → Link
  if (link) {
    return (
      <Link to={link} className={className}>
        {children}
      </Link>
    );
  }

  // 👉 Sinon → vrai bouton (important pour formulaire)
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;