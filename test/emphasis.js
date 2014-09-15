var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("emphasis", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Heading 1
    Some *italic* and __bold__ in the title
    **and** also in some _text_
  */})

  var tokens = [
    ["heading","#"],
    ["whitespace"," "],
    ["text","Heading"],
    ["whitespace"," "],
    ["text","1"],
    ["new line","\n"],
    ["text","Some"],
    ["whitespace"," "],
    ["star","*"],
    ["text","italic"],
    ["star","*"],
    ["whitespace"," "],
    ["text","and"],
    ["whitespace"," "],
    ["emphasis","__"],
    ["text","bold"],
    ["emphasis","__"],
    ["whitespace"," "],
    ["text","in"],
    ["whitespace"," "],
    ["text","the"],
    ["whitespace"," "],
    ["text","title"],
    ["new line","\n"],
    ["emphasis","**"],
    ["text","and"],
    ["emphasis","**"],
    ["whitespace"," "],
    ["text","also"],
    ["whitespace"," "],
    ["text","in"],
    ["whitespace"," "],
    ["text","some"],
    ["whitespace"," "],
    ["emphasis","_"],
    ["text","text"],
    ["emphasis","_"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})