var http = require('http');
var shoe = require('shoe');
var ecstatic = require('ecstatic')(__dirname + '/static');
var muxDemux = require('mux-demux');
var dnode = require('dnode');

var server = http.createServer(ecstatic);
server.listen(8086);
console.log('http://localhost:8086');

var sock = shoe(function (stream) {
    var md = muxDemux();
    md.pipe(stream).pipe(md);
    
    var digits = md.createWriteStream('digits');
    var hex = md.createWriteStream('hex');
    var d = dnode({
        time : function (cb) { cb(Date.now()) }
    });
    d.pipe(md.createStream('dnode')).pipe(d);
    
    var ivs = [
        setInterval(function () {
            digits.write(Math.floor(Math.random() * 10));
        }, 100),
        setInterval(function () {
            hex.write(Math.floor(Math.random() * 16).toString(16));
        }, 400)
    ];
    stream.on('end', function () {
        ivs.forEach(function (iv) { clearInterval(iv) });
    });
});
sock.install(server, '/sock');
