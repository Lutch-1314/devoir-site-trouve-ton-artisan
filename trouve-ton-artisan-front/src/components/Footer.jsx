import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer ">

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-auto">
            <address>
              <span className="d-block">Lyon</span>
              <span className="d-block">101 cours Charlemagne</span>
              <span className="d-block">CS 20033</span>
              <span className="d-block">69269 LYON CEDEX 02</span>
              <span className="d-block">France</span>
              <span className="d-block">+33 (0)4 26 73 40 00</span>
            </address>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-auto">
            <ul className="footer-links list-unstyled ps-0 mb-0">

              <li className="footer-link">
                <Link to="/being-built">Mentions légales</Link>
              </li>

              <li className="footer-link">
                <Link to="/being-built">Données personnelles</Link>
              </li>

              <li className="footer-link">
                <Link to="/being-built">Accessibilité</Link>
              </li>

              <li className="footer-link">
                <Link to="/being-built">Politique des cookies</Link>
              </li>

              <li className="footer-link">
                <Link to="/being-built">Gestion des cookies</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;