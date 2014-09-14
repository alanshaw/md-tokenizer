# Markdown tokenizer

Streaming markdown tokenizer.

## Example

README.md:

```md
# Block code
Some text
```js
  var foo = "bar"
  function logFoo () {
    console.log(foo)
  }
\```
More text
```

```js
var fs = require("fs")
var mdtok = require("md-tokenizer")

fs.createReadStream("README.md").pipe(mdtok(function (src, token) {
  JSON.stringify([token.type, src])
}))
```

Output:

```js
["heading 1","# "]
["text","Block code"]
["new line","\n"]
["text","Some text"]
["new line","\n"]
["code block","```js"]
["new line","\n"]
["text","  var foo "]
["text continue","="]
["text"," "]
["text continue","\""]
["text","bar"]
["text continue","\""]
["new line","\n"]
["text","  function logFoo "]
["text continue","()"]
["text"," {"]
["new line","\n"]
["text","    console.log"]
["text continue","("]
["text","foo"]
["text continue",")"]
["new line","\n"]
["text","  }"]
["new line","\n"]
["code block","```"]
["new line","\n"]
["text","More text"]
```
