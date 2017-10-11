#!/usr/bin/env node
'use strict'

const meow = require('meow')
const anderson = require('.')

meow(
  `
  Usage:
    $ anderson

  Options:
    -h, --help                Show help options
    -v, --version             Show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

anderson()
