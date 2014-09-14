var Tokenizer = require("tokenizer")

module.exports = function (cb) {
  var t = new Tokenizer(cb)

  t.addRule(/^# $/, "heading 1")
  t.addRule(/^====*$/, "heading 1 underline")
  t.addRule(/^## $/, "heading 2")
  t.addRule(/^----*$/, "heading 2 underline")
  t.addRule(/^### $/, "heading 3")
  t.addRule(/^#### $/, "heading 4")
  t.addRule(/^##### $/, "heading 5")
  t.addRule(/^###### $/, "heading 6")

  t.addRule(/^[*-]|[0-9]+\.$/, "list item")

  t.addRule(/^[^!\[\]()'"#=\-`\n]+$/, "text")

  t.addRule(/^`[^`]+.*?`$/, "code inline")
  t.addRule(/^```[a-z]*$/, "code block")

  t.addRule(/^[!\[\]()'"#=\-`]*$/, "text continue")

  t.addRule(/^\n$/, "new line")

  return t
}