import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import InfoCard from "../../components/InfoCard/InfoCard";
import AverageSessionDurationChart from "../../components/AverageSessionDurationChart/AverageSessionDurationChart";
import Styles from "./Dashboard.module.scss";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import UseApiTest from "../../mock/mock";

// icon
import icon_energy from "../../assets/icons/energy.png";
import icon_chicken from "../../assets/icons/chicken.png";
import icon_apple from "../../assets/icons/apple.png";
import icon_cheeseburger from "../../assets/icons/cheeseburger.png";

import {
  pushItemAndAddIndex,
  numberFormatter,
} from "../../utils/dataFormatting";
/**
 * dashbord with all the component of the chart
 */
const Dashboard = () => {
  let { id } = useParams();

  // ref juste une variable en gros
  const dataRef = useRef();
  const compoRef = useRef();

  const USER_MAIN = compoRef.current?.getDatas().USER_MAIN_DATA[0].userInfos;

  // const [user, setUser] = useState();
  const [keyData, setkeyData] = useState([]);
  const [activity, setActivity] = useState([]);
  const [session, setSession] = useState([]);

  let sessionData = [];

  useEffect(() => {
    const path = compoRef.current?.getDatas().USER_MAIN_DATA[0];
    // console.log(user.current);
    setkeyData([
      {
        icon: icon_energy,
        number: numberFormatter.format(path.keyData.calorieCount),
        unit: "kCal",
        subtitle: "Calories",
      },
      {
        icon: icon_chicken,
        number: path.keyData.proteinCount,
        unit: "g",
        subtitle: "Proteines",
      },
      {
        icon: icon_apple,
        number: path.keyData.carbohydrateCount,
        unit: "g",
        subtitle: "Glucides",
      },
      {
        icon: icon_cheeseburger,
        number: path.keyData.lipidCount,
        unit: "g",
        subtitle: "Lipides",
      },
    ]);
  }, []);

  useEffect(() => {
    const path = compoRef.current?.getDatas().USER_ACTIVITY[0].sessions;
    pushItemAndAddIndex(path, setActivity, sessionData);
  }, []);

  useEffect(() => {
    const path = compoRef.current?.getDatas().USER_AVERAGE_SESSIONS[0].sessions;
    pushItemAndAddIndex(path, setSession, sessionData);
  }, []);

  // console.log(activity);

  return (
    <div className={Styles.dashboardContainer}>
      {console.log(USER_MAIN)}
      {/* {console.log(keyData)} */}
      {/* 
        call api Boolean => true by default
        true  = data_mocks 
        false = fetch api
      */}
      <UseApiTest
        initialValue={true}
        dataRef={dataRef}
        id={id}
        ref={compoRef}
      />

      {/* {console.log(user)} */}
      <div className={Styles.dashboard__main}>
        <div className={Styles.dashboard__header}>
          <h1 className={Styles.dashboard__headerName}>
            Bonjour
            <span>{USER_MAIN ? " " + USER_MAIN.firstName : " inconu"}</span>
          </h1>
          <p className={Styles.dashboard__headerText}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className={Styles.dashboard__content}>
          <DailyActivityChart
            itemClass={Styles.dashboard__contentElem}
            activity={activity}
          />

          <InfoCard
            itemClass={Styles.dashboard__contentElem}
            keyData={keyData}
          />

          <AverageSessionDurationChart
            itemClass={Styles.dashboard__contentElem}
            data={session}
          />

          <PerformanceChart itemClass={Styles.dashboard__contentElem} />

          <ScoreChart itemClass={Styles.dashboard__contentElem} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
