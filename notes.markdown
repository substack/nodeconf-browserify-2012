# the future and browsers

"If you want a picture of the future, imagine a boot stamping on a human face, forever."

[boot on a face]
[boot on a face zooms out]
[boot-owner's face is the IE logo]
[IE logo switches to troll IE]

node is exploding in popularity
[mushroom cloud]
post-apocalypse that follows

"you can use the same code in node and the browser"
is usually not elaborated well
something about using validation logic in both places

let's change that to read:
"you can use npm modules in the browser"

this is a lot more compelling:
* there's a LOT of value being created on npm
* version conflicts go away with the node module system
* really simple to publish, don't ask for permission
[hall pass]
* minimal, composable, reusable packages
* less need for kitchen sinks
[kitchen sink]

[hall pass: no permission necessary]

browsers, meanwhile, are a clusterfuck
[apocalyptic mutants]
* guards around every damn thing

* AMD? first of all, which amd
* if you go the amd route you need to wrap everything
* boilerplatey

# browserify
browserify's goal: make node modules work in the browser

{live code a simple module using some npm modules}

browserify wraps a lot of node core
* events
* buffer
* url
* querystring
* stream
* http
* vm
* crypto

# streams

because we have node builtins in browserify, we have streams

streams are really great because unlike events, it's really easy to serialize
them in order to hook them up between our backend and frontend systems

if you write a module that has a stream interface, you can just browserify it
and then use it on either side, so long as your transport is streaming

JSONStream is great for that

* sockjs
[sockjs]

* shoe
[shoe]

* mux-demux
[cb radio]

{live code a realtime example using mux-demux over shoe}

# tests

in order to realize this aim of using npm as a place where browser code and node
code live together, we'll need a better way of telling which code runs in which
environments

in the immediate future, you'll be able to put these in your readme.markdowns:

[testling badges alongside travis badges]

here's what I have now:

{live testling demo}

# invent

standards bodies are waterfall
[picture of a waterfall]

the best way to predict the future is to invent it

[npm publish all the things]
