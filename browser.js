var swoop = require('swoop');
var $ = function (sel) { return document.querySelector(sel) };

var files = [
    'substack.png',
    
    'rocket_turtle.png',
    'blastoff.png',
    'atomic_0.png',
    'atomic_1.png',
    'atomic_2.png',
    
    'npm_0.png',
    'npm_1.png',
    'npm_2.png',
    'npm_3.png',
    
    'demo.png#earl-grey', // earl grey demo
    
    'brain.png',
    'mind_explosion.png',
    'mind_explosion_silly.png',
    
    'separate_all_the_concerns.png',
    'mutants.png',
    'browser_mutants.png',
    'all_the_concerns.png',
    'modularity.png',
    'browserify.png',
    
    'demo.png#bundle', // simple bundle demo
    
    'streams.png',
    'dnode.png',
    'shoe.png',
    'mad_scientist.png',
    
    'demo.png#stream', // stream demo
    
    'testling.png',
    'demo.png#testling', // testling demo
    'testling_badge_dnode.png',
    
    'mad_science_pony.png',
    'ben_franklin.png',
    'yarnify.png',
    'swoop.png',
    
    'apatosaur.png',
    'author.png'
];
var order = files.map(function (file) {
    return file.replace(/\.[^.#]+/, '').replace(/#(.+)/, '_$1');
});

var sw = swoop(files.reduce(function (acc, file, ix) {
    var elem = document.createElement('div');
    elem.className = 'link';
    elem.setAttribute('href', '#' + (order[ix+1] || order[0]));
    var img = document.createElement('img');
    img.addEventListener('load', function () {
        var w = img.width, h = img.height;
        var ww = window.innerWidth, wh = window.innerHeight;
        var as = w / h;
        if (as > ww / wh) {
            img.width = ww;
            img.height = ww / as;
        }
        else {
            img.width = wh * as;
            img.height = wh;
        }
        console.log(img.width + 'x' + img.height);
    });
    img.setAttribute('src', 'images/' + file);
    elem.appendChild(img);
    
    acc[order[ix]] = elem;
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
});

sw.appendTo($('#viewer'));
