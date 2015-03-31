#!/usr/bin/env node
var convertStream = require('../lib/convert-stream');

process.stdin.pipe(convertStream(process.argv[2])).pipe(process.stdout);
