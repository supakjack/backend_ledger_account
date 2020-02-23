//  packeage //
var express = require('express');
var router = express.Router();
const versionRoutes = require('express-routes-versioning')();
//  packeage //

//  controller //
const bookController = require('../controllers/bookController');
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
    '1.0.0': bookController.getAtBookV1
  })
);
// get all Book

// get all Book
router.get(
  '/',
  versionRoutes({
    '1.0.0': bookController.getAllBookV1
  })
);
// get all Book

// add Book
router.post(
  '/',
  versionRoutes({
    '1.0.0': bookController.addBookV1
  })
);
// add Book

// update Book
router.put(
  '/:id',
  versionRoutes({
    '1.0.0': bookController.updateBookV1
  })
);
// update Book

// deleteAt Book
router.delete(
  '/:id',
  versionRoutes({
    '1.0.0': bookController.deleteAtBookV1
  })
);
// deleteAt Book

module.exports = router;
