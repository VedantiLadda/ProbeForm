const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// var session = require('express-session')

const app = express();
// app.use(session({ secret: 'RIT Data Center 19089905'}))
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
  res.send('hello');
});
app.use('/v1/apis', require('./routes/apis/api-index'));

module.exports = app;
