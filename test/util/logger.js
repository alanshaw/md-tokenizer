var mdtok = require("../../")

module.exports = function (md) {
  var tokenizer = mdtok(function (src, token) {
    console.log(JSON.stringify([token.type, src]) + ",")
  })
  tokenizer.write(md)
  tokenizer.end()
}