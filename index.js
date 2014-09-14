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

  // Workaround 3 or more literal issue
  t.addRule(/^==+$/, "text")
  t.addRule(/^--+$/, "text")
  t.addRule(/^##+$/, "text")

  t.addRule(/^\n\s*[*+\-]\s+$/, "list item")
  t.addRule(/^\n\s*[0-9]+\.\s+$/, "ordered list item")

  t.addRule(/^```([a-z]*|\s*\n)$/, "code block")
  t.addRule(/^`$/, "code inline")

  t.addRule(/^\*$/, "emphasis 1")
  t.addRule(/^_$/, "emphasis 1")

  t.addRule(/^\*\*$/, "emphasis 2")
  t.addRule(/^__$/, "emphasis 2")

  t.addRule(/^[^!\[\]()'"#=\-`*_\n]+$/, "text")
  t.addRule(/^[!\[\]()'"#=\-`*_]$/, "text")

  t.addRule(/^\n$/, "new line")

  return t
}