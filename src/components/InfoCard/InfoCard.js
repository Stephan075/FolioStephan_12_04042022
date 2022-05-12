import PropTypes from "prop-types";
import Styles from "./InfoCard.module.scss";

/**
 *
 * Displays the user's data in maps.
 *
 */
const InfoCard = ({ itemClass, keyData }) => {
  return (
    <div className={itemClass}>
      {keyData.map((key, index) => (
        <div className={Styles.card} key={index}>
          <img
            className={Styles.card__img}
            src={key.icon}
            alt={`icon ${key.subtitle}`}
          />
          <div className={Styles.card__content}>
            <p className={Styles.card__contentTitle}>
              {key.number}
              {key.unit}
            </p>
            <p className={Styles.card__contentSubtitle}>{key.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

InfoCard.propTypes = {
  keyData: PropTypes.array.isRequired,
  itemClass: PropTypes.string.isRequired,
};

export default InfoCard;
