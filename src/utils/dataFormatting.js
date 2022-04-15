export const numberFormatter = Intl.NumberFormat("en-EN");

/**
 *
 * @param {array} items
 * @param {array} setArray
 * @param {array} initialArray
 * @param {boolean} key
 */
export const pushItemAndAddIndex = (
  items,
  setArray,
  initialArray,
  key = true
) => {
  for (const [i, item] of items.entries()) {
    const index = { index: i + 1 };
    if (key) {
      setArray((initialArray) => [...initialArray, { ...item, ...index }]);
    } else {
      setArray((initialArray) => [...initialArray, { ...item }]);
    }
  }
};

/**
 *
 * @param {String} day
 * @returns
 */
export const dayFormatter = (day) => {
  switch (day) {
    case 1:
      day = "L";
      break;
    case 2:
      day = "M";
      break;
    case 3:
      day = "M";
      break;
    case 4:
      day = "J";
      break;
    case 5:
      day = "V";
      break;
    case 6:
      day = "S";
      break;
    case 7:
      day = "D";
      break;
    default:
      return day;
  }
  return day;
};
