
/**
 * Corporation types aliases.
 * @type {Object}
 */

const types = {
  'Ltd': 'Limited',
  'Inc': 'Incorporated'
}

module.exports = function (str) {
  const args = str
    .trim()
    .replace(/\s\s+/g, ' ')
    .match(/(\w*)[\s]?[,.]?[\s]?(\w*)/)
  const type = args[2] || 'Incorporated'
  return {
    name: args[1],
    type: types[type] || type
  }
}
