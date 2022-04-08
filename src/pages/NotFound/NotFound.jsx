import React, { useEffect, useState } from "react";
import Styles from "./NotFound.module.scss";

/**
 * dashbord with all the component of the chart
 */
const NotFound = () => {
  return (
    <div className={Styles.dashboardContainer}>
      <div className={Styles.dashboard__main}>
        <div className={Styles.dashboard__header}>
          <h1 className={Styles.dashboard__headerName}>
            Pour acceder au tableau de bord merci d'ajouter '/user/12' ou
            '/user/18' dans l'url
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
