// 4XX status code related to client side error
// 5XX status code related to server side error

const getErrorStatus = require('../constants/errors.constant');

function findErrorMessage(status) {
  return (
    getErrorStatus.ERROR_STATUS_ARRAY.find((v) => v.status === status) || {
      error: 'There must be an error',
    }
  );
}

function findSuccessMessage(status, message, data) {
  return {
    status,
    message,
    data,
  };
}

/**
 * Success Response.
 * @param {number} status - Success response status
 * @param {string} succMessage - Success response message
 * @param {any} data - Success response custom data
 */
const successResponse = (status, succMessage, data) =>
  findSuccessMessage(status, succMessage, data);

/**
 * Error Response.
 * @param {Response} res - Send error response
 * @param {number} statusCode - Error Status Code
 */
const errorResponse = (statusCode) => findErrorMessage(statusCode);

module.exports = {
  errorResponse,
  successResponse,
};
