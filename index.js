var Tokenizer = require("tokenizer")

module.exports = function (cb) {
  var t = new Tokenizer(cb)

  t.addRule(/^#{1,6}$/, "heading") // Heading
  t.addRule(/^#{7,}$/, "text")
  t.addRule(/^={1,2}$/, "text")
  t.addRule(/^={3,}$/, "equal underline")
  t.addRule(/^-$/, "minus") // List item
  t.addRule(/^--$/, "text")
  t.addRule(/^-{3,}$/, "minus underline")

  t.addRule(/^\*$/, "star") // Emphasis/list item
  t.addRule(/^\+$/, "plus") // List item
  t.addRule(/^[0-9]+\.$/, "number") // Ordered list item
  t.addRule(/^`$/, "tick") // Code block or inline code
  t.addRule(/^_$/, "underscore") // Emphasis

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
  t.addRule(/^[^\S\n]$/, "whitespace")

  // Anything not a special is just text
  t.addRule(/^[^!\[\]()'"#=\-`*_+\s>]+$/, "text")

  return t
}