import { Route, Link } from "react-router-dom";
import Styles from "./SideMenu.module.scss";
import logo from "../../assets/logo/logo.png";

import icon_meditation from "../../assets/icons/meditation.svg";
import icon_swim from "../../assets/icons/swim.svg";
import icon_bike from "../../assets/icons/bike.svg";
import icon_weights from "../../assets/icons/weights.svg";

const iconSlideLinks = [
  {
    to: "/",
    icon: icon_meditation,
  },
  {
    to: "/",
    icon: icon_swim,
  },
  {
    to: "/",
    icon: icon_bike,
  },
  {
    to: "/",
    icon: icon_weights,
  },
];

/**
 *
 * @param {to = adresse link, icon = link icon} param0
 * @returns element li
 */
const ListItemLink = ({ to, icon }) => (
  <Route
    children={() => (
      <li className={Styles.icone_block}>
        <Link to={to}>
          <img src={icon} alt="img icon" />
        </Link>
      </li>
    )}
  />
);

const SideMenu = () => {
  return (
    <div className={Styles.sideMenu}>
      <div className="main-menu">
        <ul>
          {iconSlideLinks.map((iconItem, index) => (
            <ListItemLink key={index} to={iconItem.to} icon={iconItem.icon} />
          ))}
        </ul>
      </div>

      <div className={Styles.sideMenuFooter}>
        <div>
          <p className="">Copiryght, SportSee 2020</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
