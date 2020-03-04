//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const fbExtensionController = require('../controllers/fbExtensionController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// get at Book id
router.get(
  '/:id',
  versionRoutes({
    '1.0.0':fbExtensionController.getAtfbExtensionV1
  })
);
// get all Book

// get all Book
router.get(
  '/',
  versionRoutes({
    '1.0.0': fbExtensionController.getAllfbExtensionV1
  })
);
// get all Book

// add Book
router.post(
  '/',
  versionRoutes({
    '1.0.0': fbExtensionController.addfbExtensionV1
  })
);
// add Book

// update Book
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': fbExtensionController.updatefbExtensionV1
  })
);
// update Book

// deleteAt Book
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': fbExtensionController.deleteAtfbExtensionV1
  })
);
// deleteAt Book

module.exports = router;
