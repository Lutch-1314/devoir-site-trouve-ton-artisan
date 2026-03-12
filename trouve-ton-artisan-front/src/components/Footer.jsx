import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container-fluid py-4">

      <div className="container">

        <div className="row">
          <div className="col text-center">
            <address className="mb-4">
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

      <hr className="footer-separator"/>

      <div className="container">

        <div className="row justify-content-center text-center">

          <div className="col-12 col-md-auto footer-link">
            <Link to="/being-built">Mentions légales</Link>
          </div>

          <div className="col-12 col-md-auto footer-link">
            <Link to="/being-built">Données personnelles</Link>
          </div>

          <div className="col-12 col-md-auto footer-link">
            <Link to="/being-built">Accessibilité</Link>
          </div>

          <div className="col-12 col-md-auto footer-link">
            <Link to="/being-built">Politique des cookies</Link>
          </div>

          <div className="col-12 col-md-auto footer-link">
            <Link to="/being-built">Gestion des cookies</Link>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;