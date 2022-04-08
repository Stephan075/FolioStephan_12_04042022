import React from "react";
import Styles from "./InfoCard.module.scss";
import icon_energy from "../../assets/icons/energy.png";
import icon_chicken from "../../assets/icons/chicken.png";
import icon_apple from "../../assets/icons/apple.png";
import icon_cheeseburger from "../../assets/icons/cheeseburger.png";

const InfoCard = ({ itemClass, user }) => {
  const separator = (numb) => {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const numberFormatter = Intl.NumberFormat("en-EN");
  // keyData
  const keyData = [
    {
      icon: icon_energy,
      number: numberFormatter.format(user.keyData.calorieCount),
      unit: "kCal",
      subtitle: "Calories",
    },
    {
      icon: icon_chicken,
      number: user.keyData.proteinCount,
      unit: "g",
      subtitle: "Proteines",
    },
    {
      icon: icon_apple,
      number: user.keyData.carbohydrateCount,
      unit: "g",
      subtitle: "Glucides",
    },
    {
      icon: icon_cheeseburger,
      number: user.keyData.lipidCount,
      unit: "g",
      subtitle: "Lipides",
    },
  ];
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

export default InfoCard;
