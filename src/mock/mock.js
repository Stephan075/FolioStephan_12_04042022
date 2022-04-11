import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data_mocks";

const useApiTest = (initialValue = true) => {
  const [data, setData] = useState(null);
  if (initialValue) {
    return {
      USER_MAIN_DATA,
      USER_ACTIVITY,
      USER_AVERAGE_SESSIONS,
      USER_PERFORMANCE,
    };
  } else {
    fetch("http://localhost:3001/").then((dataa) => {
      dataa.json().then((dataa) => {
        setData({ dataa });
        console.log(dataa);
      });
    });

    console.log(data);
  }
};

export default useApiTest;
