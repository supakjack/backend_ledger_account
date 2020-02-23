//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const extensionController = require('../controllers/extensionController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// get at Extension id
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': extensionController.getAtExtensionV1
  })
);
// get all Extension

// get all Extension
router.get(
  '/',
  versionRoutes({
    '1.0.0': extensionController.getAllExtensionV1
  })
);
// get all Extension

// add Extension
router.post(
  '/',
  versionRoutes({
    '1.0.0': extensionController.addExtensionV1
  })
);
// add Extension

// update Extension
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': extensionController.updateExtensionV1
  })
);
// update Extension

// deleteAt Extension
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': extensionController.deleteAtExtensionV1
  })
);
// deleteAt Extension

module.exports = router;
