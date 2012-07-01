var argv = require('optimist').argv;
var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var server = http.createServer(ecstatic);

var port = argv.port || 8198;
server.listen(port);
console.log('http://localhost:' + port);
