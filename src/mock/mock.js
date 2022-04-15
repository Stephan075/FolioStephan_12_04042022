import { forwardRef, useImperativeHandle } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data_mocks";

const UseApiTest = forwardRef(({ initialValue = true, dataRef, id }, ref) => {
  let i = 0;
  // const getData = () => {
  //   dataRef.current = {
  //     USER_MAIN_DATA: USER_MAIN_DATA.filter((user) => {
  //       return user.id === parseInt(id);
  //     }),
  //     USER_ACTIVITY: USER_ACTIVITY.filter((user) => {
  //       return user.userId === parseInt(id);
  //     }),
  //     USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS.filter((user) => {
  //       return user.userId === parseInt(id);
  //     }),
  //     USER_PERFORMANCE: USER_PERFORMANCE.filter((user) => {
  //       return user.userId === parseInt(id);
  //     }),
  //   };

  //   if (!initialValue) {
  //     const url = "http://localhost:3001";

  //     const dataPref = ["", "/activity", "/average-sessions", "/performance"];

  //     dataPref.map((pref) => {
  //       fetch(`${url}/user/${id}${pref}`).then((dataa) => {
  //         dataa.json().then((dataa) => {
  //           // setData({ dataa });
  //           // console.log(dataa);
  //           // %3 :3 item dans le tab
  //           dataRef.current[Object.keys(dataRef.current)[i++ % 3]] = dataa;
  //         });
  //       });
  //     });
  //     // console.log(data);
  //   }
  //   return dataRef.current;
  // };
  const getData = () => {
    dataRef.current = {
      USER_MAIN_DATA: USER_MAIN_DATA.filter((user) => {
        return user.id === parseInt(id);
      }),
      USER_ACTIVITY: USER_ACTIVITY.filter((user) => {
        return user.userId === parseInt(id);
      }),
      USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS.filter((user) => {
        return user.userId === parseInt(id);
      }),
      USER_PERFORMANCE: USER_PERFORMANCE.filter((user) => {
        return user.userId === parseInt(id);
      }),
    };

    if (!initialValue) {
      const url = "http://localhost:3001";

      const dataPref = ["", "/activity", "/average-sessions", "/performance"];

      dataPref.map((pref) => {
        fetch(`${url}/user/${id}${pref}`).then((dataa) => {
          dataa.json().then((dataa) => {
            // setData({ dataa });
            // console.log(dataa);
            // %3 :3 item dans le tab
            dataRef.current[Object.keys(dataRef.current)[i++ % 3]] = dataa;
          });
        });
      });
      // console.log(data);
    }
    return dataRef.current;
  };
  useImperativeHandle(ref, () => ({ getDatas: getData }));

  return null;
});

export default UseApiTest;
