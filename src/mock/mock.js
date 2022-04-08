import React, { useState } from "react";

const useApi = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      set: setValue,
      toggle: () => setValue((flag) => !flag),
    },
  ];
};

// https://dev.to/selvaece25/using-facade-pattern-create-react-custom-hooks-as-reusable-and-reliable-5bh8
