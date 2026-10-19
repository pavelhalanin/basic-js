const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (
    String(date) == new Date() ||
    Object.prototype.toString.call(date) !== "[object Date]" ||
    !(date instanceof Date)
  ) {
    return "Invalid date!";
  }

  const MONTH_INDEX = date.getMonth();

  const SEASON_DICT = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];

  return SEASON_DICT[MONTH_INDEX];
}

module.exports = {
  getSeason,
};
