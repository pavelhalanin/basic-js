const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const T_1_2 = HALF_LIFE_PERIOD;
  const A_0 = MODERN_ACTIVITY;
  const A = sampleActivity;

  if (typeof A !== "string" || isNaN(A) || A > A_0 || A <= 0) {
    return false;
  }

  const T = (T_1_2 * Math.log(A_0 / A)) / Math.LN2;
  return Math.ceil(T);
}

module.exports = {
  dateSample,
};
