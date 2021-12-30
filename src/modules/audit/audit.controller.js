const { validationResult } = require('express-validator');
const AuditServices = require('./audit.services');
const reqResponse = require('../../utils/responseHandler');

module.exports = {
  createAudit: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(402).send(reqResponse.errorResponse(402));
      return;
    }
    const { body: data, params, query } = req || {};
    try {
      const result = await AuditServices.createAudit(data, params, query);
      console.log(result);
      res
        .status(201)
        .send(
          reqResponse.successResponse(
            201,
            'Audit Created',
            'Audit has been created successfully'
          )
        );
    } catch (error) {
      console.error(error);
      res.status(502).send(reqResponse.errorResponse(502));
    }
  },

  updateAudit: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(402).send(reqResponse.errorResponse(402));
      return;
    }
    const { body: data, params, query } = req || {};
    AuditServices.updateAudit(data, params, query)
      .then((result) => {
        console.log('1414===', result);
        res
          .status(201)
          .send(
            reqResponse.successResponse(
              201,
              'Audit Updated',
              'Audit has been updated successfully'
            )
          );
      })
      .catch((error) => {
        console.error(error);
        res.status(502).send(reqResponse.errorResponse(502));
      });
  },

  getAudits: async (req, res) => {
    res
      .status(201)
      .send(
        reqResponse.successResponse(
          201,
          'Audit List',
          'Audits have been fetched successfully'
        )
      );
  },
};
