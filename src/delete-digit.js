const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const STR = String(n);

  const CHAR_ARRAY = STR.split("");

  const ARRAY_NUMBERS = CHAR_ARRAY.map((_, index) => {
    return Number(CHAR_ARRAY.filter((_, i) => index !== i).join(""));
  });

  let max = ARRAY_NUMBERS[0];
  for (let i = 1; i < ARRAY_NUMBERS.length; i++) {
    if (ARRAY_NUMBERS[i] > max) {
      max = ARRAY_NUMBERS[i];
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
