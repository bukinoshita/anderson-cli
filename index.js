'use strict'

const anderson = require('anderson')
const chalk = require('chalk')
const logSymbols = require('log-symbols')

module.exports = opts => {
  anderson(opts).then(dependencies => {
    dependencies.map(({ name, version, license, contraband }) => {
      const valid = contraband ? logSymbols.error : logSymbols.success
      return console.log(
        `${valid} ${chalk.bold(name)} under ${chalk.bold(license)} ${chalk.gray('v' +
          version
        )}`
      )
    })
  })
}
