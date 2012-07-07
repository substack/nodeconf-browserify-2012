var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
http.createServer(ecstatic).listen(8085);
console.log('http://localhost:8085');
