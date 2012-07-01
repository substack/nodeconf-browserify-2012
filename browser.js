var yarn = require('./slides/yarn');
var swoop = require('swoop');
var $ = function (sel) { return document.querySelector(sel) };

var order = [ 'intro', 'future', 'end' ];

var sw = swoop(order.reduce(function (acc, key, ix) {
    var elem = yarn(key + '.html');
    elem.addClass('link');
    elem.setAttribute('href', '#' + (order[ix+1] || order[0]));
    
    acc[key] = elem;
    return acc;
}, {}));
sw.show(order[0]);

sw.element.addEventListener('click', function () {
    var ix = order.indexOf(sw.active);
    sw.show(order[ix+1] || order[0]);
});

window.addEventListener('keydown', function (ev) {
    if (ev.keyIdentifier === 'Left') {
        var ix = (order.indexOf(sw.active) - 1) % order.length;
        if (ix < 0) ix += order.length;
        sw.show(order[ix]);
    }
    else if (ev.keyIdentifier === 'Right') {
        var ix = (order.indexOf(sw.active) + 1) % order.length;
        sw.show(order[ix]);
    }
    console.log(ev.keyIdentifier);
});

sw.appendTo($('#viewer'));
