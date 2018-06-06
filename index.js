
module.exports = function (str) {
  const args = str
    .trim()
    .replace(/\s\s+/g, ' ')
    .match(/(\w*)[\s]?[,.]?/)
  return {
    name: args[1]
  }
}
