var shoe = require('shoe');
var es = require('event-stream');
var muxDemux = require('mux-demux');
var dnode = require('dnode');

var stream = shoe('/sock');
var md = muxDemux();
md.on('connection', function (s) {
    if (s.meta === 'dnode') {
        var d = dnode();
        var ts = divStream('time');
        d.on('remote', function (remote) {
            setInterval(function () {
               remote.time(function (t) { ts.write(t) })
            }, 1000);
        });
        d.pipe(s).pipe(d);
    }
    else s.pipe(divStream(s.meta)).pipe(s);
});
stream.pipe(md).pipe(stream);

function divStream (name) {
    var div = document.createElement('div');
    var b = document.createElement('b');
    b.appendChild(document.createTextNode(name + ': '));
    div.appendChild(b);
    document.body.appendChild(div);
    
    return es.through(function (msg) {
        var txt = document.createTextNode(msg);
        div.appendChild(txt);
    });
}
