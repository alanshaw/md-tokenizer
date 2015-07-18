var Tokenizer = require("tokenizer")

module.exports = function (cb) {
  var t = new Tokenizer(cb)

  t.addRule(/^#{1,6}$/, "heading") // Heading
  t.addRule(/^#{7,}$/, "text")
  t.addRule(/^={1,2}$/, "text")
  t.addRule(/^={3,}$/, "underline equal")
  t.addRule(/^-\s$/, "list item dash") // List item dash
  t.addRule(/^-$/, "text")
  t.addRule(/^--$/, "text")
  t.addRule(/^-{3,}$/, "underline dash")

  t.addRule(/^\*$/, "star") // Emphasis/list item
  t.addRule(/^\*\*$/, "emphasis")
  t.addRule(/^\+\s$/, "list item plus") // List item plus
  t.addRule(/^\+$/, "text")
  t.addRule(/^[0-9]+\.$/, "list item ordered")
  t.addRule(/^`$/, "code inline")
  t.addRule(/^``$/, "text")
  t.addRule(/^```$/, "code block")
  t.addRule(/^_{1,2}$/, "emphasis")
  t.addRule(/^_{3,}$/, "text")

  t.addRule(/^!$/, "bang") // Image
  t.addRule(/^\($/, "open paren") // URL/Image
  t.addRule(/^\)$/, "close paren") // URL/Image
  t.addRule(/^\[$/, "open square") // URL/Image
  t.addRule(/^\]$/, "close square") // URL/Image
  t.addRule(/^'$/, "single quot") // URL/Image
  t.addRule(/^"$/, "double quot") // URL/Image

  t.addRule(/^>$/, "gt") // Blockquote

  // Separate newline from whitespace since it's important
  t.addRule(/^\n$/, "new line")
  t.addRule(/^[^\S\n]+$/, "whitespace")

  // Anything not a special is just text
  t.addRule(/^[^!\[\]()'"#=\-`*_+\s>]+$/, "text")

  return t
}