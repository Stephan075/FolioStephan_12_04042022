import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import InfoCard from "../../components/InfoCard/InfoCard";
import AverageSessionDurationChart from "../../components/AverageSessionDurationChart/AverageSessionDurationChart";
import Styles from "./Dashboard.module.scss";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import UseApi from "../../mock/mock";

// icon
import icon_energy from "../../assets/icons/energy.png";
import icon_chicken from "../../assets/icons/chicken.png";
import icon_apple from "../../assets/icons/apple.png";
import icon_cheeseburger from "../../assets/icons/cheeseburger.png";

import { numberFormatter } from "../../utils/dataFormatting";
import NotFound from "../NotFound/NotFound";

//Dashbord with all the component of the chart
const Dashboard = () => {
  let { id } = useParams();
  id = parseInt(id);

  const ref = useRef(); // react Dom
  const dataRef = useRef(); // composant

  const USER_MAIN = ref.current?.getDatas().USER_MAIN_DATA[0];
  const [keyData, setkeyData] = useState(false); //card
  const [activity, setActivity] = useState([]);
  const [session, setSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [dataScore, setDataScore] = useState(0);

  /**
   * data user MAIN
   */
  useEffect(() => {
    const path = ref.current?.getDatas().USER_MAIN_DATA[0];
    // console.log(path);
    if (path) {
      setkeyData([
        {
          icon: icon_energy,
          number: numberFormatter.format(path?.keyData.calorieCount),
          unit: "kCal",
          subtitle: "Calories",
        },
        {
          icon: icon_chicken,
          number: path?.keyData.proteinCount,
          unit: "g",
          subtitle: "Proteines",
        },
        {
          icon: icon_apple,
          number: path?.keyData.carbohydrateCount,
          unit: "g",
          subtitle: "Glucides",
        },
        {
          icon: icon_cheeseburger,
          number: path?.keyData.lipidCount,
          unit: "g",
          subtitle: "Lipides",
        },
      ]);
    }
    // console.log(user.current);
  }, []);

  /**
   * Data user ACTIVITY
   */
  useEffect(() => {
    const path = ref.current?.getDatas().USER_ACTIVITY[0];
    if (path) {
      return setActivity(path.sessions);
    }
  }, []);

  /**
   * Data user SESSIONS "Average session duration"
   */
  useEffect(() => {
    const path = ref.current?.getDatas().USER_AVERAGE_SESSIONS[0];
    if (path) {
      return setSession(path.sessions);
    }
  }, []);

  /**
   * Data user PERFORMANCE
   */
  useEffect(() => {
    const path = [ref.current?.getDatas().USER_PERFORMANCE[0]];
    if (path[0]?.data) {
      const data = path[0].data;
      let kind = path[0].kind;
      // Link the kind and the data with a kind available in the data table
      const dataLinkWithTheKind = data.map((perf) => {
        perf.kind = kind[perf.kind];
        return perf;
      });

      setPerformance(dataLinkWithTheKind);
    }
  }, []);

  /**
   * Data user SCORE
   */
  useEffect(() => {
    const path = ref.current?.getDatas().USER_MAIN_DATA[0];
    if (path) {
      let score = path.score || path.todayScore;
      setDataScore(score);
    }
  }, []);

  return (
    <>
      {/* initialValue default = true ; false = api connection */}
      <UseApi initialValue={false} dataRef={dataRef} id={id} ref={ref} />
      {keyData && activity && session ? (
        <>
          <div>
            <div className={Styles.dashboardContainer}>
              <div className={Styles.dashboard__main}>
                <div className={Styles.dashboard__header}>
                  <h1 className={Styles.dashboard__headerName}>
                    Bonjour
                    <span>
                      {USER_MAIN.userInfos
                        ? " " + USER_MAIN.userInfos.firstName
                        : " inconnu"}
                    </span>
                  </h1>
                  <p className={Styles.dashboard__headerText}>
                    F??licitation ! Vous avez explos?? vos objectifs hier ????
                  </p>
                </div>
                <div className={Styles.dashboard__content}>
                  <DailyActivityChart
                    itemClass={Styles.item_1}
                    activity={activity}
                  />
                  <InfoCard itemClass={Styles.item_2} keyData={keyData} />

                  <AverageSessionDurationChart
                    itemClass={Styles.item_3}
                    data={session}
                  />

                  <PerformanceChart
                    itemClass={Styles.item_4}
                    performance={performance}
                  />
                  <ScoreChart itemClass={Styles.item_5} score={dataScore} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Dashboard;
