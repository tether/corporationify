
module.exports = function (str) {
  const args = str.match(/(\w*)[,.]?/)
  return {
    name: args[1]
  }
}
