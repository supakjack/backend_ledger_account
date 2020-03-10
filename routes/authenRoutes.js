//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const authenControllerV1 = require('../controllers/v-1.0.0/authenController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// checkAuthenByFacebookId
router.get(
  '/facebook/:id',
  versionRoutes({
    '1.0.0': authenControllerV1.checkAuthenByFacebookId
  })
);
// checkAuthenByFacebookId

// deleteAuthenByAuthenId
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': authenControllerV1.deleteAuthenByAuthenId
  })
);
// deleteAuthenByAuthenId

// addAuthenByFacebookId
router.post(
  '/facebook',
  versionRoutes({
    '1.0.0': authenControllerV1.addAuthenByFacebookId
  })
);
// addAuthenByFacebookId

// getFullStateUserByAuthenId
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': authenControllerV1.getFullStateUserByAuthenId
  })
);
// getFullStateUserByAuthenId

module.exports = router;
