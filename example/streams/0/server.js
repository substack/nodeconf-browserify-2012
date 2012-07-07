var http = require('http');
var shoe = require('shoe');
var ecstatic = require('ecstatic')(__dirname+'/static');

var server = http.createServer(ecstatic);
server.listen(8086);

var sock = shoe(function (stream) {
    setInterval(function () {
        stream.write(Math.floor(Math.random() * 10));
    }, 100);
});
sock.install(server, '/sock');
