var app = require('./app');
var http = require('http');

app.set('port', '5000');

var server = http.createServer(app);
server.listen('5000');
