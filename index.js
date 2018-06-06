
/**
 * Corporation types aliases.
 * @type {Object}
 */

const types = {
  'Ltd': 'Limited',
  'Inc': 'Incorporated'
}

/**
 * Extract corporation name and type from string,.
 *
 * @param {String} str
 * @param {String?}
 * @return {Object} default corporation type
 * @api public
 */

module.exports = function (str, def = 'Incorporated') {
  const args = str
    .trim()
    .replace(/\s\s+/g, ' ')
    .match(/(\w*)[\s]?[,.]?[\s]?(\w*)/)
  const type = args[2] || def
  return {
    name: args[1],
    type: types[type] || type
  }
}
