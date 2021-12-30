const glob = require('glob');

module.exports = (app) => {
  glob(`${__dirname}/modules/**/*.routes.js`, {}, (er, files) => {
    if (er) throw er;
    files.forEach((file) => require(file)(app)); // eslint-disable-line import/no-dynamic-require, global-require
  });
};
