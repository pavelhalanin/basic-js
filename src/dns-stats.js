const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const RESULT_DICT = {};
  domains.forEach(domain => {
    const SUB_DOMAINS = domain.split('.').reverse();
    let dns = '';
    for (let i = 0; i < SUB_DOMAINS.length; i++) {
      dns += `.${SUB_DOMAINS[i]}`;
      RESULT_DICT[dns] = (RESULT_DICT[dns] + 1) || 1
    }
  });
  return RESULT_DICT;
}

module.exports = {
  getDNSStats
};
