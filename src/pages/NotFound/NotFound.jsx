import Styles from "./NotFound.module.scss";
import data from "../../mock/mock_test";
import { Link } from "react-router-dom";

/**
 * dashbord with all the component of the chart
 */
const NotFound = () => {
  return (
    <div className={Styles.dashboard__main}>
      <div className={Styles.dashboardContainer}>
        <div className={Styles.dashboard__header}>
          <h1 className={Styles.dashboard__headerName}>
            Seuls deux utilisateurs sont actuellement disponibles dans notre
            base de données !
            {data.userData[0].USER_MAIN_DATA.map((data, key) => (
              <div key={key}>
                <Link to={`/user/${data.id}`}>
                  <p>{data?.userInfos.firstName}</p>
                </Link>
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
