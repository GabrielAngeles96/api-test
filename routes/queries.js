'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controllers/queries');

router.get('/:manager', controller.manageQueries);

module.exports = router;