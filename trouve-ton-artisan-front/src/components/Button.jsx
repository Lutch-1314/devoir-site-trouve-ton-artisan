import { Link } from "react-router-dom";

const Button = ({ children, link }) => {
  return (
    <Link to={link} className="btn-artisan">
      {children}
    </Link>
  );
};

export default Button;