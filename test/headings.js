var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Hello World
  */})

  var tokens = [
    ["heading","#"],
    ["whitespace"," "],
    ["text","Hello"],
    ["whitespace"," "],
    ["text","World"],
    ["new line", "\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})

test("heading 1 underline", function (t) {
  var md = multiline.stripIndent(function () {/*
    Hello World
    ====
  */})

  var tokens = [
    ["text","Hello"],
    ["whitespace"," "],
    ["text","World"],
    ["new line","\n"],
    ["underline equal","===="],
    ["new line", "\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})

test("heading 2", function (t) {
  var md = multiline.stripIndent(function () {/*
    ## Hello World
  */})

  var tokens = [
    ["heading","##"],
    ["whitespace"," "],
    ["text","Hello"],
    ["whitespace"," "],
    ["text","World"],
    ["new line", "\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})

test("heading 2 underline", function (t) {
  var md = multiline.stripIndent(function () {/*
    Hello World
    ---
  */})

  var tokens = [
    ["text","Hello"],
    ["whitespace"," "],
    ["text","World"],
    ["new line","\n"],
    ["underline dash","---"],
    ["new line", "\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})

test("heading 3", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Heading 1
    Text
    ## Heading 2
    More text
    ### Heading 3
    ...and more
  */})

  var tokens = [
    ["heading","#"],
    ["whitespace"," "],
    ["text","Heading"],
    ["whitespace"," "],
    ["text","1"],
    ["new line","\n"],
    ["text","Text"],
    ["new line","\n"],
    ["heading","##"],
    ["whitespace"," "],
    ["text","Heading"],
    ["whitespace"," "],
    ["text","2"],
    ["new line","\n"],
    ["text","More"],
    ["whitespace"," "],
    ["text","text"],
    ["new line","\n"],
    ["heading","###"],
    ["whitespace"," "],
    ["text","Heading"],
    ["whitespace"," "],
    ["text","3"],
    ["new line","\n"],
    ["text","...and"],
    ["whitespace"," "],
    ["text","more"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})