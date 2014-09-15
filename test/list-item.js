var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Hello World

    Boring text

    * Item one
      * Sub item one
      * Sub item two
    - Item two
    + Item three
  */})

  var tokens = [
    ["heading","#"],
    ["whitespace"," "],
    ["text","Hello"],
    ["whitespace"," "],
    ["text","World"],
    ["new line","\n"],
    ["new line","\n"],
    ["text","Boring"],
    ["whitespace"," "],
    ["text","text"],
    ["new line","\n"],
    ["new line","\n"],
    ["star","*"],
    ["whitespace"," "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","one"],
    ["new line","\n"],
    ["whitespace","  "],
    ["star","*"],
    ["whitespace"," "],
    ["text","Sub"],
    ["whitespace"," "],
    ["text","item"],
    ["whitespace"," "],
    ["text","one"],
    ["new line","\n"],
    ["whitespace","  "],
    ["star","*"],
    ["whitespace"," "],
    ["text","Sub"],
    ["whitespace"," "],
    ["text","item"],
    ["whitespace"," "],
    ["text","two"],
    ["new line","\n"],
    ["list item dash","-"],
    ["whitespace"," "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","two"],
    ["new line","\n"],
    ["list item plus","+"],
    ["whitespace"," "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","three"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})