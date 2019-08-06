const http = require('http');
const app = require('./app');

app.set('port', '5000');

const server = http.createServer(app);
console.log('running');
server.listen('5000');

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`listening on ${bind}`);
}

server.on('listening', onListening);
