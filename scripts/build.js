const label = 'build';
console.time(label);

const clean = require('vitreum/steps/clean.js');
const jsx   = require('vitreum/steps/jsx.js');
const lib   = require('vitreum/steps/libs.js');
const less  = require('vitreum/steps/less.js');
const asset = require('vitreum/steps/assets.js');

const Proj = require('./project.json');

Promise.resolve()
	.then(()=>clean())
	.then(()=>lib(Proj.libs))
	.then(()=>jsx('garden', './client/garden/garden.jsx', Proj.libs))
	.then((deps)=>less('garden', [], deps))
	.then(()=>asset(Proj.assets, ['./client']))
	.then(()=>console.timeEnd.bind(console, label))
	.catch(console.error);