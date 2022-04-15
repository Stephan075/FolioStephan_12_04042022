import React, { useEffect, useState } from "react";
import Styles from "./InfoCard.module.scss";

const InfoCard = ({ itemClass, keyData }) => {
  // const [keyData, setkeyData] = useState([]);
  // console.log(keyData);
  // keyData
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
