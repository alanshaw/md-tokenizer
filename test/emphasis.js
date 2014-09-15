var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("emphasis 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Heading 1
    foo # Some *italic* and __bold__ in the title
    **and** also in some _text_
  */})

  var tokens = [
    ["hash","#"],
    ["whitespace"," "],
    ["text","Heading"],
    ["whitespace"," "],
    ["text","1"],
    ["new line","\n"],
    ["text","foo"],
    ["whitespace"," "],
    ["hash","#"],
    ["whitespace"," "],
    ["text","Some"],
    ["whitespace"," "],
    ["star","*"],
    ["text","italic"],
    ["star","*"],
    ["whitespace"," "],
    ["text","and"],
    ["whitespace"," "],
    ["underscore","_"],
    ["underscore","_"],
    ["text","bold"],
    ["underscore","_"],
    ["underscore","_"],
    ["whitespace"," "],
    ["text","in"],
    ["whitespace"," "],
    ["text","the"],
    ["whitespace"," "],
    ["text","title"],
    ["new line","\n"],
    ["star","*"],
    ["star","*"],
    ["text","and"],
    ["star","*"],
    ["star","*"],
    ["whitespace"," "],
    ["text","also"],
    ["whitespace"," "],
    ["text","in"],
    ["whitespace"," "],
    ["text","some"],
    ["whitespace"," "],
    ["underscore","_"],
    ["text","text"],
    ["underscore","_"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})