#!/usr/bin/env node
'use strict'

const meow = require('meow')
const anderson = require('.')

const cli = meow(
  `
  Usage:
    $ anderson

  Example:
    $ anderson
    $ anderson --dev --peer

  Options:
    -p, --peer                Run on peer dependencies too
    -d, --dev                 Run on dev dependencies too
    -h, --help                Show help options
    -v, --version             Show version
`,
  {
    alias: {
      p: 'peer',
      d: 'dev',
      h: 'help',
      v: 'version'
    }
  }
)

const dev = cli.flags.d
const peer = cli.flags.p
const opts = { dev: dev ? dev : false, peer: peer ? peer : false }

anderson(opts)
