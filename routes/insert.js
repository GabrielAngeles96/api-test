'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controllers/insert');

router.post('/:manager', controller.manageInsert);

module.exports = router;