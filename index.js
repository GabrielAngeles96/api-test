'use strict';

var serverless = require('serverless-http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var integracion = require('./routes/integracion');
var insert = require('./routes/insert');
var queries = require('./routes/queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/integracion',integracion);
app.use('/api/insert',insert);
app.use('/api/queries',queries);


app.listen(function(){
  console.log('Listening on port 3000');
});

module.exports.handler = serverless(app);
