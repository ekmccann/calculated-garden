const label = 'dev';
console.time(label);

const jsx = require('vitreum/steps/jsx.watch.js');
const less = require('vitreum/steps/less.watch.js');
const assets = require('vitreum/steps/assets.watch.js');
const server = require('vitreum/steps/server.watch.js');
const livereload = require('vitreum/steps/livereload.js');

const Proj = require('./project.json');

Promise.resolve()
	.then(()=>jsx('garden', './client/garden/garden.jsx', Proj.libs))
	.then((deps)=>less('garden', './shared', deps))
	.then(()=>assets(Proj.assets, ['./client']))
	.then(()=>livereload())
	.then(()=>server('./server.js', ['server']))
	.then(()=>console.timeEnd.bind(console, label))
	.catch(console.error)