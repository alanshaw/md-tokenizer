var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Hello World
  */})

  var tokens = [
    ["hash","#"],
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
    ["underline","===="],
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
    ["text", "Hello World"],
    ["new line", "\n"],
    ["heading 2 underline", "---"],
    ["new line", "\n"]
  ]

  logger(md)
  //runner(t, md, tokens)
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
    ["heading 1","# "],
    ["text","Heading 1"],
    ["new line","\n"],
    ["text","Text"],
    ["new line","\n"],
    ["heading 2","## "],
    ["text","Heading 2"],
    ["new line","\n"],
    ["text","More text"],
    ["new line","\n"],
    ["heading 3","### "],
    ["text","Heading 3"],
    ["new line","\n"],
    ["text","...and more"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})