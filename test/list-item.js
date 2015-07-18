var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
   # Hello World

   Boring text

   `your-great-feature`

   `your+amazing+feature`

   * Item one
   * Sub item two
   * Sub item three
   - Item four
   + Item five
   */
  })

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
    ["code inline","`"],
    ["text","your"],
    ["text","-"],
    ["text","great"],
    ["text","-"],
    ["text","feature"],
    ["code inline","`"],
    ["new line","\n"],
    ["new line","\n"],
    ["code inline","`"],
    ["text","your"],
    ["list item plus","+"],
    ["text","amazing"],
    ["list item plus","+"],
    ["text","feature"],
    ["code inline","`"],
    ["new line","\n"],
    ["new line","\n"],
    ["star","*"],
    ["whitespace"," "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","one"],
    ["new line","\n"],
    ["star","*"],
    ["whitespace"," "],
    ["text","Sub"],
    ["whitespace"," "],
    ["text","item"],
    ["whitespace"," "],
    ["text","two"],
    ["new line","\n"],
    ["star","*"],
    ["whitespace"," "],
    ["text","Sub"],
    ["whitespace"," "],
    ["text","item"],
    ["whitespace"," "],
    ["text","three"],
    ["new line","\n"],
    ["list item dash","- "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","four"],
    ["new line","\n"],
    ["list item plus","+ "],
    ["text","Item"],
    ["whitespace"," "],
    ["text","five"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})