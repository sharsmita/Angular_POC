var express = require('express');
var app = express();

var PocController = require('./sla/poc_controller');
app.use('/sla', PocController);

module.exports = app;