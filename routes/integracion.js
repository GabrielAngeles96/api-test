'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controllers/integracion');

router.post('/:manager', controller.manageIntegracion);

module.exports = router;