/**
 * logger.js
 *
 * Logger middleware, you can customize it to make messages more personal
 *
 */

/* eslint-disable no-console */

/**
 * Module dependencies.
 */
const chalk = require('chalk');
const ip = require('ip');

/**
 * Module variables.
 * @private
 */
const divider = chalk.gray('\n-----------------------------------------------');

/**
 * Module variables.
 * @public
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red(err));
  },

  success: (msz) => {
    console.log(chalk.green(msz));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`\n🚀 Server started ! ${chalk.green('✓')}`);

    console.log(`
      ${chalk.bold('Access URLs:')}${divider}
        Localhost: ${chalk.magenta(`http://${host}:${port}`)}
              LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },

  info: (msz) => {
    console.info(chalk.blue(msz));
  },
};

/**
 * Module exports.
 * @public
 */
module.exports = logger;
