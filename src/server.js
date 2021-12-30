/**
 * server.js
 *
 * This is the main file where server starts up
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./utils/logger');

/**
 * Module variables.
 * @private
 */
const app = express();
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 4000;

/**
 * Adding middleware
 */
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register all our routes
require('./routes')(app);

// To check if setup is working
app.get('/', (req, res) => {
  res.send('App is working');
});

/**
 * Start up the server and listening to port
 */
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  return logger.appStarted(port, prettyHost);
});
