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
    ["hash","#"],
    ["whitespace"," "],
    ["text","Block"],
    ["whitespace"," "],
    ["text","code"],
    ["new line","\n"],
    ["text","Some"],
    ["whitespace"," "],
    ["text","text"],
    ["new line","\n"],
    ["tick","`"],
    ["tick","`"],
    ["tick","`"],
    ["text","js"],
    ["new line","\n"],
    ["whitespace"," "],
    ["whitespace"," "],
    ["text","var"],
    ["whitespace"," "],
    ["text","foo"],
    ["whitespace"," "],
    ["equal","="],
    ["whitespace"," "],
    ["double quot","\""],
    ["text","bar"],
    ["double quot","\""],
    ["new line","\n"],
    ["whitespace"," "],
    ["whitespace"," "],
    ["text","function"],
    ["whitespace"," "],
    ["text","logFoo"],
    ["whitespace"," "],
    ["open paren","("],
    ["close paren",")"],
    ["whitespace"," "],
    ["text","{"],
    ["new line","\n"],
    ["whitespace"," "],
    ["whitespace"," "],
    ["whitespace"," "],
    ["whitespace"," "],
    ["text","console.log"],
    ["open paren","("],
    ["text","foo"],
    ["close paren",")"],
    ["new line","\n"],
    ["whitespace"," "],
    ["whitespace"," "],
    ["text","}"],
    ["new line","\n"],
    ["tick","`"],
    ["tick","`"],
    ["tick","`"],
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
    ["hash","#"],
    ["whitespace"," "],
    ["text","Inline"],
    ["whitespace"," "],
    ["text","code"],
    ["new line","\n"],
    ["text","Some"],
    ["whitespace"," "],
    ["text","text"],
    ["whitespace"," "],
    ["tick","`"],
    ["text","some.code"],
    ["open paren","("],
    ["close paren",")"],
    ["tick","`"],
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