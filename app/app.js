var express         = require('express');

var app             = express();
var bodyParser      = require('body-parser');

var routes          = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/', express.static('client'));

module.exports = app;