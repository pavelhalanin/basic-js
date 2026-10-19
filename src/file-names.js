const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const DICT = {};
  const RESULT = [];

  for (let i = 0; i < names.length; i++) {
    const FILE = names[i];

    DICT[FILE] = DICT[FILE] + 1 || 0;

    if (DICT[FILE] == 0) {
      RESULT.push(FILE);
    } else {
      RESULT.push(`${FILE}(${DICT[FILE]})`);
      DICT[`${FILE}(${DICT[FILE]})`] = DICT[`${FILE}(${DICT[FILE]})`] + 1 || 0;
    }
  }

  return RESULT;
}

module.exports = {
  renameFiles,
};
