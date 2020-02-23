//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const personController = require('../controllers/personController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// get at person id
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': personController.getAtPersonV1
  })
);
// get all person

// get all person
router.get(
  '/',
  versionRoutes({
    '1.0.0': personController.getAllPersonV1
  })
);
// get all person

// add person
router.post(
  '/',
  versionRoutes({
    '1.0.0': personController.addPersonV1
  })
);
// add person

// update person
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': personController.updatePersonV1
  })
);
// update person

// deleteAt person
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': personController.deleteAtPersonV1
  })
);
// deleteAt person

module.exports = router;
