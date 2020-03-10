//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const bookControllerV1 = require('../controllers/v-1.0.0/bookController');
//  controller //

//  versionRoutes //
router.use(function(req, res, next) {
  req.version = req.headers['accept-version'];
  next();
});
//  versionRoutes //

// getAmountByBookId
router.get(
  '/amount/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getAmountByBookId
  })
);
// getAmountByBookId

// getIncomeByBookIdNowDate
router.get(
  '/income/:id/now',
  versionRoutes({
    '1.0.0': bookControllerV1.getIncomeByBookIdNowDate
  })
);
// getIncomeByBookIdNowDate

// getExpenseByBookIdNowDate
router.get(
  '/expense/:id/now',
  versionRoutes({
    '1.0.0': bookControllerV1.getExpenseByBookIdNowDate
  })
);
// getExpenseByBookIdNowDate

// getIncomeByBookId
router.get(
  '/income/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getIncomeByBookId
  })
);
// getIncomeByBookId

// getExpenseByBookId
router.get(
  '/expense/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getExpenseByBookId
  })
);
// getExpenseByBookId

// getCurrencyByBookId
router.get(
  '/currency/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getCurrencyByBookId
  })
);
// getCurrencyByBookId

// getBookNameByBookId
router.get(
  '/name/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getBookNameByBookId
  })
);
// getBookNameByBookId

// getBookByAuthenId
router.get(
  '/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.getBookByAuthenId
  })
);
// getBookByAuthenId

// addBook
router.post(
  '/',
  versionRoutes({
    '1.0.0': bookControllerV1.addBook
  })
);
// addBook

// updateNameByBookId
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.updateNameByBookId
  })
);
// updateNameByBookId

// deleteBookByBookId
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': bookControllerV1.deleteBookByBookId
  })
);
// deleteBookByBookId

module.exports = router;
