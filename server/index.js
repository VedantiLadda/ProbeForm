var app = require('./app');
var http = require('http');

app.set('port', '5000');

var server = http.createServer(app);
console.log("running");
server.listen('5000');
