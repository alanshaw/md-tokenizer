# md-tokenizer [![Build Status](http://img.shields.io/travis/alanshaw/md-tokenizer.svg?style=flat)](https://travis-ci.org/alanshaw/md-tokenizer) [![Dependency Status](https://david-dm.org/alanshaw/md-tokenizer.svg?style=flat)](https://david-dm.org/alanshaw/md-tokenizer)

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
["text","Hello"]
["whitespace"," "]
["text","World"]
["new line","\n"]
["text","Some"]
["whitespace"," "]
["text","text"]
["new line","\n"]
```
