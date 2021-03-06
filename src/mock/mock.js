import { forwardRef, useImperativeHandle } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data_mocks";

// Component call data mock or API
const UseApi = forwardRef(({ initialValue = true, dataRef, id }, ref) => {
  let i = 0;

  /**
   *
   * Get information from a user and add it to the dataRef.current
   * @returns {Object} list data user
   */
  const getData = () => {
    dataRef.current = {
      USER_MAIN_DATA: USER_MAIN_DATA.filter((user) => {
        return user.id === id;
      }),
      USER_ACTIVITY: USER_ACTIVITY.filter((user) => {
        return user.userId === id;
      }),
      USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS.filter((user) => {
        return user.userId === id;
      }),
      USER_PERFORMANCE: USER_PERFORMANCE.filter((user) => {
        return user.userId === id;
      }),
    };

    if (!initialValue) {
      const url = "http://localhost:3000";

      const dataPref = ["", "/activity", "/average-sessions", "/performance"];

      dataPref.map((pref) => {
        fetch(`${url}/user/${id}${pref}`)
          .then((response) => {
            response.json().then((data) => {
              // %3 :3 item in the tab
              dataRef.current[Object.keys(dataRef.current)[i++ % 3]] = data;
            });
          })
          .catch((e) => {
            console.log(
              "Il y a eu un problème avec l'opération fetch: " + e.message
            );
          });
      });
    }

    return dataRef.current;
  };
  useImperativeHandle(ref, () => ({ getDatas: getData }));
});

export default UseApi;
