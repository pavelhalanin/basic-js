const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) {
    return "";
  }

  let char = str[0];
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      count += 1;
      continue;
    }

    result += `${count > 1 ? count : ""}${char}`;
    char = str[i];
    count = 1;
  }

  result += `${count > 1 ? count : ""}${char}`;

  return result;
}

module.exports = {
  encodeLine,
};
