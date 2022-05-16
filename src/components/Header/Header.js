import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import Styles from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";

const nameHeadersLinks = [
  {
    to: "/",
    name: "Accueil",
  },
  {
    to: "/",
    name: "Profil",
  },
  {
    to: "/",
    name: "Réglage",
  },
  {
    to: "/",
    name: "Communauté",
  },
];

/**
 *
 * @param {to = adresse link, name = name link} param0
 * @returns element li
 */
const ListItemLink = ({ to, name }) => (
  //The use of children is very similar to render.
  //But there is an important difference: the component is called even if the route does not match.

  <Route
    children={() => (
      <li className={Styles.navItem}>
        <Link to={to}>{name}</Link>
      </li>
    )}
  />
);

// Component Header
const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={logo} alt="logo SportSee" />
      <nav className={Styles.navHeader}>
        <ul>
          {nameHeadersLinks.map((nameHeader, index) => (
            <ListItemLink
              key={index}
              to={nameHeader.to}
              name={nameHeader.name}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
