const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const ADDITION = Object.hasOwn(options, "addition")
    ? String(options.addition)
    : "";

  const ADDITION_REPEAT_TIMES = Object.hasOwn(options, "additionRepeatTimes")
    ? options.additionRepeatTimes
    : 1;

  const ADDITION_SEPARATOR = Object.hasOwn(options, "additionSeparator")
    ? String(options.additionSeparator)
    : "|";

  const REPEAT_TIMES = Object.hasOwn(options, "repeatTimes")
    ? options.repeatTimes
    : 1;

  const SEPARATOR = Object.hasOwn(options, "separator")
    ? String(options.separator)
    : "+";

  const ADDITION_PART =
    Array.from({ length: ADDITION_REPEAT_TIMES })
      .fill(ADDITION)
      .join(ADDITION_SEPARATOR);

  return Array.from({ length: REPEAT_TIMES })
    .fill(`${str}${ADDITION_PART}`)
    .join(SEPARATOR);
}

module.exports = {
  repeater,
};
