var app = require('./app');
var http = require('http');

app.set('port', '5000');

var server = http.createServer(app);
console.log("running");
server.listen('5000');
server.on('listening', onListening);
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log("listening on "+bind);
}