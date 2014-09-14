var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("emphasis 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Some *italic* and __bold__ in the title
    **and** also in some _text_
  */})

  var tokens = [
    ["heading 1","# "],
    ["text","Some "],
    ["emphasis 1","*"],
    ["text","italic"],
    ["emphasis 1","*"],
    ["text"," and "],
    ["emphasis 2","__"],
    ["text","bold"],
    ["emphasis 2","__"],
    ["text"," in the title"],
    ["new line","\n"],
    ["emphasis 2","**"],
    ["text","and"],
    ["emphasis 2","**"],
    ["text"," also in some "],
    ["emphasis 1","_"],
    ["text","text"],
    ["emphasis 1","_"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})