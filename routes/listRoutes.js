//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const listController = require('../controllers/listControllers');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// get at List id
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': listController.getAtListV1
  })
);
// get all List

// get all List
router.get(
  '/',
  versionRoutes({
    '1.0.0': listController.getAllListV1
  })
);
// get all List

// add List
router.post(
  '/',
  versionRoutes({
    '1.0.0': listController.addListV1
  })
);
// add List

// update List
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': listController.updateListV1
  })
);
// update List

// deleteAt List
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': listController.deleteAtListV1
  })
);
// deleteAt List

module.exports = router;
