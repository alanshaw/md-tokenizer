var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Hello World

    Boring text

    * Item one
    - Item two
    + Item three
  */})

  var tokens = [
    ["heading 1","# "],
    ["text","Hello World"],
    ["new line","\n"],
    ["new line","\n"],
    ["text","Boring text"],
    ["new line","\n"],
    ["list item","\n* "],
    ["text","Item one"],
    ["new line","\n"],
    ["list item","- "],
    ["text","Item two"],
    ["new line","\n"],
    ["list item","+ "],
    ["text","Item three"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})