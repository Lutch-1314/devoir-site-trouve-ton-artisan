import { Link } from "react-router-dom";
import PhoneIcon from "./PhoneIcon";

const Footer = () => {
  return (
    <footer className="footer section">

      <div className="default-container">

        <div className="row justify-content-center">
          <div className="col-auto">
            <address>
              <span className="d-block city">Lyon</span>
              <a href="https://www.google.com/maps/place/101+Cr+Charlemagne,+69002+Lyon/@45.7389784,4.8184539,17z/data=!4m6!3m5!1s0x47f4ecfb42ffac87:0x949daf5720a56c30!8m2!3d45.7389557!4d4.8206121!16s%2Fg%2F11c3q36h3v?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                 target="_blank">
                <span className="d-block">101 cours Charlemagne</span>
                <span className="d-block">CS 20033</span>
                <span className="d-block">69269 LYON CEDEX 02</span>
                <span className="d-block">France</span>
              </a>
              <a className="tel" href="tel:33426734000" target="_blank">
                <span className="d-flex align-items-center tel">
                <PhoneIcon />
                +33 (0)4 26 73 40 00
                </span>
              </a>
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