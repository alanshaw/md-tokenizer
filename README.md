# md-tokenizer [![Dependency Status](https://david-dm.org/alanshaw/md-tokenizer.svg?style=flat)](https://david-dm.org/alanshaw/md-tokenizer)

Streaming markdown tokenizer.

## Example

README.md:

```md
# Hello World
Some text
```

```js
var fs = require("fs")
var mdtok = require("md-tokenizer")

var t = mdtok(function (src, token) {
  JSON.stringify([token.type, src])
})

fs.createReadStream("README.md").pipe(t)
```

Output:

```js
["heading 1","# "]
["text","Hello World"]
["new line","\n"]
["text","Some text"]
["new line","\n"]
```
