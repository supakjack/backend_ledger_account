//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const listControllerV1 = require('../controllers/v-1.0.0/listController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// addIncomeListByBookId
router.post(
  '/income',
  versionRoutes({
    '1.0.0': listControllerV1.addIncomeListByBookId
  })
);
// addIncomeListByBookId

// addExpenseListByBookId
router.post(
  '/expense',
  versionRoutes({
    '1.0.0': listControllerV1.addExpenseListByBookId
  })
);
// addExpenseListByBookId

module.exports = router;
