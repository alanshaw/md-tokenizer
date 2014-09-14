var mdtok = require("../../")

module.exports = function (t, md, tokens) {
  var i = 0

  var tokenizer = mdtok(function (src, token) {
    t.ok(tokens[i], i + " < total number of expected tokens")
    t.equal(token.type, tokens[i][0], "Token type should be \"" + tokens[i][0] + "\"")
    t.equal(src, tokens[i][1], "Token src should be " + JSON.stringify(tokens[i][1]))
    i++
  })

  t.plan((tokens.length - 1) * 3)

  tokenizer.on("end", t.end)

  tokenizer.write(md)
  tokenizer.end()
}