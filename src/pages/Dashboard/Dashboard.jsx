import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../mock/data_mocks";

import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import InfoCard from "../../components/InfoCard/InfoCard";
import AverageSessionDurationChart from "../../components/AverageSessionDurationChart/AverageSessionDurationChart";
import Styles from "./Dashboard.module.scss";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";

/**
 * dashbord with all the component of the chart
 */
const Dashboard = () => {
  const [user, setUser] = useState({
    userInfos: {},
    keyData: {},
  });
  // id of the user retrieved in the link with useParams
  let { id } = useParams();

  // get user info
  useEffect(() => {
    USER_MAIN_DATA.map((user) => {
      if (user.id === parseInt(id)) {
        setUser(user);
      }
      return null;
    });
  }, [id]);

  return (
    <div className={Styles.dashboardContainer}>
      <div className={Styles.dashboard__main}>
        <div className={Styles.dashboard__header}>
          <h1 className={Styles.dashboard__headerName}>
            Bonjour
            <span> {user.userInfos ? user.userInfos.firstName : "inconu"}</span>
          </h1>
          <p className={Styles.dashboard__headerText}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className={Styles.dashboard__content}>
          <DailyActivityChart itemClass={Styles.dashboard__contentElem} />

          <InfoCard itemClass={Styles.dashboard__contentElem} user={user} />

          <AverageSessionDurationChart
            itemClass={Styles.dashboard__contentElem}
          />

          <PerformanceChart itemClass={Styles.dashboard__contentElem} />

          <ScoreChart itemClass={Styles.dashboard__contentElem} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
