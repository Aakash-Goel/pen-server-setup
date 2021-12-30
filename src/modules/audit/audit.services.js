/* eslint-disable */
module.exports = {
  createAudit: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      reject(true);
    });
  },
  updateAudit: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
};
