import Styles from "./NotFound.module.scss";
import data from "../../mock/mock_test";
import ClipboardCopy from "../../components/ClipboardCopy/ClipboardCopy";
import { useEffect, useState } from "react";

/**
 * dashbord with all the component of the chart
 */
const NotFound = () => {
  const [isUser, setIsUser] = useState(0);

  useEffect(() => {
    const dataUser = data.userData[0].USER_MAIN_DATA;

    setIsUser(dataUser);
  }, []);

  return (
    <div className={Styles.notFound__main}>
      <div className={Styles.notFoundContainer}>
        <div className={Styles.notFound__header}>
          <h1 className={Styles.notFound__headerName}>
            Seuls {isUser.length} utilisateurs sont actuellement disponibles
            dans notre base de données !
            <br />
            <br />
            <br />
            {data.userData[0].USER_MAIN_DATA.map((data, key) => (
              <div key={key}>
                <p className={Styles.userInfo}>
                  {data?.userInfos.firstName} {data?.userInfos.lastName}
                </p>

                <ClipboardCopy
                  copyText={`http://localhost:3000/user/${data.id}`}
                />
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
