// Constructor to create objects to format numbers according to the locale
export const numberFormatter = Intl.NumberFormat("en-EN");

/**
 *
 * @param {string} date 2020-07-04
 * @returns {number} day of the month
 */
export const dayFormatters = (date) => {
  const day = new Date(date).getDate();
  return day;
};

/**
 *
 * @param {String} day
 * @returns
 */
export const dayFormatters_dayOfTheweek = (day) => {
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
