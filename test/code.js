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
    ["heading","#"],
    ["whitespace"," "],
    ["text","Block"],
    ["whitespace"," "],
    ["text","code"],
    ["new line","\n"],
    ["text","Some"],
    ["whitespace"," "],
    ["text","text"],
    ["new line","\n"],
    ["code block","```js"],
    ["new line","\n"],
    ["whitespace","  "],
    ["text","var"],
    ["whitespace"," "],
    ["text","foo"],
    ["whitespace"," "],
    ["text","="],
    ["whitespace"," "],
    ["double quot","\""],
    ["text","bar"],
    ["double quot","\""],
    ["new line","\n"],
    ["whitespace","  "],
    ["text","function"],
    ["whitespace"," "],
    ["text","logFoo"],
    ["whitespace"," "],
    ["open paren","("],
    ["close paren",")"],
    ["whitespace"," "],
    ["text","{"],
    ["new line","\n"],
    ["whitespace","    "],
    ["text","console.log"],
    ["open paren","("],
    ["text","foo"],
    ["close paren",")"],
    ["new line","\n"],
    ["whitespace","  "],
    ["text","}"],
    ["new line","\n"],
    ["code block","```"],
    ["new line","\n"],
    ["text","More"],
    ["whitespace"," "],
    ["text","text"],
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
    ["heading","#"],
    ["whitespace"," "],
    ["text","Inline"],
    ["whitespace"," "],
    ["text","code"],
    ["new line","\n"],
    ["text","Some"],
    ["whitespace"," "],
    ["text","text"],
    ["whitespace"," "],
    ["code inline","`"],
    ["text","some.code"],
    ["open paren","("],
    ["close paren",")"],
    ["code inline","`"],
    ["whitespace"," "],
    ["text","some"],
    ["whitespace"," "],
    ["text","more"],
    ["whitespace"," "],
    ["text","text"],
    ["new line","\n"]
  ]

  //logger(md)
  runner(t, md, tokens)
})