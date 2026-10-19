const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const D1 = {};
  const D2 = {};

  for (let i = 0; i < s1.length; i++) {
    D1[s1[i]] = D1[s1[i]] + 1 || 1;
  }

  for (let i = 0; i < s2.length; i++) {
    D2[s2[i]] = D2[s2[i]] + 1 || 1;
  }

  let count = 0;
  const CHARS = Object.keys(D1);
  for (let i = 0; i < CHARS.length; i++) {
    const CHAR = CHARS[i];
    const COUNT_1 = D1[CHAR] || 0;
    const COUNT_2 = D2[CHAR] || 0;
    count += Math.min(COUNT_1, COUNT_2);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
