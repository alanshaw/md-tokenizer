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
    ["text","="],
    ["text"," "],
    ["text","\""],
    ["text","bar"],
    ["text","\""],
    ["new line","\n"],
    ["text","  function logFoo "],
    ["text","("],
    ["text",")"],
    ["text"," {"],
    ["new line","\n"],
    ["text","    console.log"],
    ["text","("],
    ["text","foo"],
    ["text",")"],
    ["new line","\n"],
    ["text","  }"],
    ["new line","\n"],
    ["code block","```\n"],
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
    ["code inline","`"],
    ["text","some.code"],
    ["text","("],
    ["text",")"],
    ["code inline","`"],
    ["text"," some more text"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})