var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
// var session = require('express-session')

var app = express();
// app.use(session({ secret: 'RIT Data Center 19089905'}))
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res, next) {
    res.send('hello');
});
app.use('/v1/apis', require('./routes/apis/api-index'));

module.exports = app;
