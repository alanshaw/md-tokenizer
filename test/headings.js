var test = require("tape")
var multiline = require("multiline")
var runner = require("./util/runner")

test("heading 1", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Hello World
  */})

  var tokens = [
    ["heading 1", "# "],
    ["text", "Hello World"],
    ["new line", "\n"]
  ]

  runner(t, md, tokens)
})

test("heading 1 underline", function (t) {
  var md = multiline.stripIndent(function () {/*
    Hello World
    ===
  */})

  var tokens = [
    ["text", "Hello World"],
    ["new line", "\n"],
    ["heading 1 underline", "==="],
    ["new line", "\n"]
  ]

  runner(t, md, tokens)
})

test("heading 2", function (t) {
  var md = multiline.stripIndent(function () {/*
    ## Hello World
  */})

  var tokens = [
    ["heading 2", "## "],
    ["text", "Hello World"],
    ["new line", "\n"]
  ]

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

  runner(t, md, tokens)
})