var shoe = require('shoe');
var es = require('event-stream');
var muxDemux = require('mux-demux');

var stream = shoe('/sock');
var md = muxDemux();
md.on('connection', function (s) {
    s.pipe(divStream(s.meta)).pipe(s);
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
