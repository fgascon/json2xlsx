#!/usr/bin/env node
var convertStream = require('../lib/convert-stream');

process.stdin.pipe(convertStream()).pipe(process.stdout);