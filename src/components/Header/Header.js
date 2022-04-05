import { Route, Link } from "react-router-dom";
import Styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

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
  /**
  L'utilisation de children est très similaire à render.
  Mais il existe une différence importante : le composant est appelé même si la route ne match pas.
   */
  <Route
    path={to}
    children={() => (
      <li className={Styles.navItem}>
        <Link to={to}>{name}</Link>
      </li>
    )}
  />
);

/**
 *
 * @returns nav Header link
 */
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

export default Header;
