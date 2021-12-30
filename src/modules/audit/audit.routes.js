const router = require('express').Router();
const AuditController = require('./audit.controller');
const RouteConstant = require('../../constants/routes.constant');

module.exports = (app) => {
  router.route('/create').post(AuditController.createAudit);

  router.route('/update').post(AuditController.updateAudit);

  router.route('/list').get(AuditController.getAudits);

  app.use(RouteConstant.AUDIT, router);
};
