//  packeage //
var express = require('express');
var router = express.Router();
//  packeage //

//  controller //
const apiDocsController = require('../controllers/apiDocsControllers');
//  controller //

// get ApiDocsLatest
router.get('/', apiDocsController.getApiDocsLatest);
// get getApiDocsLatest

module.exports = router;
