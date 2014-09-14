var test = require("tape")
var multiline = require("multiline")
var logger = require("./util/logger")
var runner = require("./util/runner")

test("block code", function (t) {
  var md = multiline.stripIndent(function () {/*
    # Block code
    Some text
    ```js
      var foo = "bar"
      function logFoo () {
        console.log(foo)
      }
    ```
    More text
  */})

  var tokens = [
    ["heading 1","# "],
    ["text","Block code"],
    ["new line","\n"],
    ["text","Some text"],
    ["new line","\n"],
    ["code block","```js"],
    ["new line","\n"],
    ["text","  var foo "],
    ["text continue","="],
    ["text"," "],
    ["text continue","\""],
    ["text","bar"],
    ["text continue","\""],
    ["new line","\n"],
    ["text","  function logFoo "],
    ["text continue","()"],
    ["text"," {"],
    ["new line","\n"],
    ["text","    console.log"],
    ["text continue","("],
    ["text","foo"],
    ["text continue",")"],
    ["new line","\n"],
    ["text","  }"],
    ["new line","\n"],
    ["code block","```"],
    ["new line","\n"],
    ["text","More text"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})

test("code inline", function (t) {
var md = multiline.stripIndent(function () {/*
    # Inline code
    Some text `some.code()` some more text
  */})

  var tokens = [
    ["heading 1","# "],
    ["text","Inline code"],
    ["new line","\n"],
    ["text","Some text "],
    ["code inline","`some.code()`"],
    ["text"," some more text"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})