//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const personControllerV1 = require('../controllers/v-1.0.0/personController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// activeAllBookByPersonId
router.patch(
  '/active/:id',
  versionRoutes({
    '1.0.0': personControllerV1.activeAllBookByPersonId
  })
);
// activeAllBookByPersonId

// deactiveAllBookByPersonId
router.patch(
  '/deactive/:id',
  versionRoutes({
    '1.0.0': personControllerV1.deactiveAllBookByPersonId
  })
);
// deactiveAllBookByPersonId

module.exports = router;
