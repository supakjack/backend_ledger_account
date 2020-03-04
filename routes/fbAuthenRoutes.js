//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const fbAuthenController = require('../controllers/fbAuthenController');
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
    '1.0.0':fbAuthenController.getAtfbAuthenV1
  })
);
// get all Book

// get all Book
router.get(
  '/',
  versionRoutes({
    '1.0.0': fbAuthenController.getAllfbAuthenV1
  })
);
// get all Book

// add Book
router.post(
  '/',
  versionRoutes({
    '1.0.0': fbAuthenController.addfbAuthenV1
  })
);
// add Book

// update Book
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': fbAuthenController.updatefbAuthenV1
  })
);
// update Book

// deleteAt Book
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': fbAuthenController.deleteAtfbAuthenV1
  })
);
// deleteAt Book

module.exports = router;
