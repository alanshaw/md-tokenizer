#!/usr/bin/env node

var tokenizer = require("../")
var t = tokenizer(function (src, token) {
  console.log(JSON.stringify([token.type, src]))
})
process.stdin.pipe(t)