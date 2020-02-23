//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const mediatorController = require('../controllers/mediatorController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// get at Mediator id
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': mediatorController.getAtMediatorV1
  })
);
// get all Mediator

// get all Mediator
router.get(
  '/',
  versionRoutes({
    '1.0.0': mediatorController.getAllMediatorV1
  })
);
// get all Mediator

// add Mediator
router.post(
  '/',
  versionRoutes({
    '1.0.0': mediatorController.addMediatorV1
  })
);
// add Mediator

// update Mediator
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': mediatorController.updateMediatorV1
  })
);
// update Mediator

// deleteAt Mediator
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': mediatorController.deleteAtMediatorV1
  })
);
// deleteAt Mediator

module.exports = router;
