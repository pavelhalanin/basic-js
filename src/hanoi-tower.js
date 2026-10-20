const { NotImplementedError } = require("../lib");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const N = disksNumber;
  const V = turnsSpeed;

  const T = 2 ** N - 1;
  const T_HOUR = T / V;
  const T_SECONDS = T_HOUR * 3600;

  return {
    turns: T,
    seconds: Math.floor(T_SECONDS),
  };
}

module.exports = {
  calculateHanoi,
};
